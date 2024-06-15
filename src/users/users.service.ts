import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma/prisma.service";
import { Prisma, User } from "@prisma/client";
import { MayBe } from "../common/types/types";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findOneByEmail(email: string): Promise<MayBe<User>> {
    return null;
  }
  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<MayBe<User[]>> {
    return null;
  }

  async create(data: Prisma.UserCreateInput): Promise<MayBe<User>> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<MayBe<User>> {
    return null;
  }
  async delete(params: { where: Prisma.UserWhereUniqueInput }) {
    const { where } = params;
    return this.prisma.user.delete({
      where,
    });
  }
}
