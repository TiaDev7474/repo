import {
  Body ,
  Controller ,
  Get ,
  Post ,
  Query ,
  Redirect , Req ,
  Res ,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { App_serviceService } from "../app_service/app_service.service";
import { JwtService } from "@nestjs/jwt";
import * as Session  from "express-session";

@Controller("oauth/cityzen-connect")
export class AuthController {
  constructor(
    private authService: AuthService,
    private appService: App_serviceService,
    private jwtService: JwtService,
  ) {}
  @Get("login")
  async login(
    @Res() res,
    @Req() req,
    @Query("client_id") client_id?: string,
    @Query("client_secret") client_secret?: string,


  ) {
      return  res.redirect("http://localhost:3000/oauth/authorization")
  }

  @Redirect("http://localhost:3000/service-public")
  @Post("token")
  async token(

    @Body() body: {
      client_id: string;
      client_secret: string;
      authorize: boolean;
    },
  ) {
    return {
      access_token: this.jwtService.sign({
        client_id: body.client_id ,
        client_secret: body.client_secret ,
      }) ,
    };
  }
}
