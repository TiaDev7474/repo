import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { App_serviceModule } from "./app_service/app_service.module";
import { PrismaModule } from "./common/prisma/prisma.module";
import { DigitalIdentityRequestModule } from "./digital-identity-request/digital-identity-request.module";
import { MailModule } from "./mail/mail.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    App_serviceModule,
    PrismaModule,
    DigitalIdentityRequestModule,
    MailModule,
  ],
  controllers: [],
})
export class AppModule {}
