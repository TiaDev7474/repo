import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendUserIdentifiant(user: any) {
    console.log("sending email address", user.email);
    const url = "http:://localhost:3000/auth/login";
    await this.mailerService.sendMail({
      to: user.email,
      subject: "Welcome to blog app",
      template: "./confirmation",
      context: {
        name: user.email,
        url,
      },
    });
  }
}
