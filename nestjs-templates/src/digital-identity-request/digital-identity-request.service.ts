import { Injectable } from "@nestjs/common";
import { DigitalIdentityRequest, Prisma } from "@prisma/client";
import { PrismaService } from "../common/prisma/prisma.service";
import { UsersService } from "../users/users.service";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";
import { MailService } from "../mail/mail.service";

@Injectable()
export class DigitalIdentityRequestService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
    private mailService: MailService,
  ) {}

  async create(
    data: Prisma.DigitalIdentityRequestCreateInput,
  ): Promise<DigitalIdentityRequest> {
    return this.prisma.digitalIdentityRequest.create({ data });
  }

  async findAll(): Promise<DigitalIdentityRequest[]> {
    return this.prisma.digitalIdentityRequest.findMany();
  }

  async findOne(id: number): Promise<DigitalIdentityRequest | null> {
    return this.prisma.digitalIdentityRequest.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: Prisma.DigitalIdentityRequestUpdateInput,
  ): Promise<DigitalIdentityRequest> {
    return this.prisma.digitalIdentityRequest.update({ where: { id }, data });
  }

  async remove(id: number): Promise<DigitalIdentityRequest> {
    return this.prisma.digitalIdentityRequest.delete({ where: { id } });
  }

  async updateState(
    id: number,
    state: string,
  ): Promise<DigitalIdentityRequest> {
    if ((state = "approved")) {
      const password = await this.generatePassword(8);
      const uniqueId = await this.generateUniqueId(id);

      const request = await this.prisma.digitalIdentityRequest.findUnique({
        where: { id },
      });
      await this.userService.create({
        firstname: request.fullName,
        lastname: "",
        password_hash: await argon2.hash(password),
        user_id: uuidv4(),
        DigitalIdentityRequest: {
          connect: {
            id,
          },
        },
      });
      return this.prisma.digitalIdentityRequest.update({
        where: { id },
        data: {
          state,
          uniqueId,
        },
      });
    }
  }

  async generateUniqueId(id: number): Promise<string> {
    const request = await this.prisma.digitalIdentityRequest.findUnique({
      where: { id },
    });
    if (!request) throw new Error("Request not found");

    const birthDate = request.birthDate;
    const datePart = birthDate.toISOString().slice(0, 10).replace(/-/g, "");

    const sequentialPart = (
      await this.prisma.digitalIdentityRequest.count({
        where: {
          birthDate: {
            gte: new Date(birthDate.setHours(0, 0, 0, 0)),
            lt: new Date(birthDate.setHours(23, 59, 59, 999)),
          },
        },
      })
    )
      .toString()
      .padStart(4, "0");

    return `MG-${datePart}-${sequentialPart}`;
  }
  async generatePassword(length: number = 8) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }
}
