import { Module } from "@nestjs/common";
import { DigitalIdentityRequestService } from "./digital-identity-request.service";
import { DigitalIdentityRequestController } from "./digital-identity-request.controller";
import { MailModule } from "../mail/mail.module";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [DigitalIdentityRequestController],
  providers: [DigitalIdentityRequestService],
  imports: [MailModule, UsersModule, JwtModule.register({}), ConfigModule],
})
export class DigitalIdentityRequestModule {}
