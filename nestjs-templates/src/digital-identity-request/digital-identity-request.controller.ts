import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Session,
  UseGuards,
  Req,
} from "@nestjs/common";
import { DigitalIdentityRequestService } from "./digital-identity-request.service";
import { Prisma } from "@prisma/client";
import { AuthGuard } from "../auth/guards/oauth_guard";
import { PrismaService } from "../common/prisma/prisma.service";

@Controller("digital-identity-request")
export class DigitalIdentityRequestController {
  constructor(
    private readonly digitalIdentityRequestService: DigitalIdentityRequestService,
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() data: Prisma.DigitalIdentityRequestCreateInput) {
    console.log(data);
    return this.digitalIdentityRequestService.create(data);
  }

  @Get()
  findAll() {
    return this.digitalIdentityRequestService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.digitalIdentityRequestService.findOne(+id);
  }
  @UseGuards(AuthGuard)
  @Get("@me")
  findme(@Param("id") id: string, @Req() req) {
    const user = req.user;
    return this.prisma.user.findFirstOrThrow({
      where: {
        user_id: user.user_id,
      },
      include: {
        DigitalIdentityRequest: true,
      },
    });
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() data: Prisma.DigitalIdentityRequestUpdateInput,
  ) {
    return this.digitalIdentityRequestService.update(+id, data);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.digitalIdentityRequestService.remove(+id);
  }

  @Put(":id/state")
  async updateState(
    @Param("id") id: string,
    @Body() body: { state: string },
    @Session() session,
  ) {
    const identity = await this.digitalIdentityRequestService.updateState(
      +id,
      body.state,
    );

    session.set("user", JSON.stringify({ user: identity.user_id }));

    return identity;
  }
}
