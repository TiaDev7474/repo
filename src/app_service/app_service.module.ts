import { Module } from "@nestjs/common";
import { App_serviceService } from "./app_service.service";
import { App_serviceController } from "./app_service.controller";
import { PrismaModule } from "../common/prisma/prisma.module";

@Module({
  controllers: [App_serviceController],
  providers: [App_serviceService],
  imports: [PrismaModule],
  exports: [App_serviceService],
})
export class App_serviceModule {}
