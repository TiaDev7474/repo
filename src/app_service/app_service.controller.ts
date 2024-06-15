import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { App_serviceService } from "./app_service.service";
import { CreateAppDto } from "./dto/create-app.dto";
import { UpdateAppDto } from "./dto/update-app.dto";
import { AppStatus } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

@Controller("app")
export class App_serviceController {
  constructor(private readonly appService: App_serviceService) {}

  @Post()
  create(@Body() createAppDto: CreateAppDto) {
    return this.appService.create({
      app_id: uuidv4(),
      app_client_id: uuidv4(),
      app_client_secret: uuidv4(),
      app_name: createAppDto.app_name,
      app_callback_url: createAppDto.app_callback_url,
    });
  }

  @Get()
  findAll(@Query() where?: AppStatus) {
    return this.appService.findAll({
      where: {
        app_statut: where,
      },
    });
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.appService.findOne({
        app_id: id,
    });
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAppDto: UpdateAppDto) {
    return this.appService.update({
      where: {
        app_id: id,
      },
      data: updateAppDto,
    });
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.appService.delete({
      where: {
        app_id: id,
      },
    });
  }
}
