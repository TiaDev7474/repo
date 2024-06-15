import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../common/prisma/prisma.service";
import { App, Prisma } from "@prisma/client";
import { MayBe } from "../common/types/types";

@Injectable()
export class App_serviceService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AppCreateInput): Promise<MayBe<App>> {
    try {
      return this.prisma.app.create({
        data,
      });
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AppWhereUniqueInput;
    where?: Prisma.AppWhereInput;
    orderBy?: Prisma.AppOrderByWithRelationInput;
  }): Promise<MayBe<App[]>> {
    const { take, cursor, where, orderBy } = params;
    return this.prisma.app.findMany({
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(params: {
    app_id: string
  }): Promise<MayBe<App>> {
    const { app_id } = params;
    return this.prisma.app.findFirst({
      where: {
        app_id: app_id
      },
    });
  }

  async update(params: {
    where: Prisma.AppWhereUniqueInput;
    data: Prisma.AppUpdateInput;
  }): Promise<MayBe<App>> {
    const { where, data } = params;
    return this.prisma.app.update({
      data,
      where,
    });
  }
  async delete(params: { where: Prisma.AppWhereUniqueInput }) {
    const { where } = params;
    return this.prisma.app.delete({
      where,
    });
  }
}
