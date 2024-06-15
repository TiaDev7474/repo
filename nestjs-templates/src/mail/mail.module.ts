import { Global, Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { join } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { MailService } from "./mail.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>("MAILER_HOST"),
          secure: true,
          auth: {
            user: config.get<string>("MAILER_USER"),
            pass: config.get<string>("MAILER_PASSWORD"),
          },
        },
        defaults: {
          from: "No reply noreply@gmail.com",
        },
        template: {
          dir: join(__dirname, "templates"),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
