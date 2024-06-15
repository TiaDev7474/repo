import { Injectable } from "@nestjs/common";
import { CredentialsDto } from "./dto/create-auth.dto";
import { UsersService } from "../users/users.service";
import { PrismaService } from "../common/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private prisma: PrismaService,
  ) {}
  async signInWithCredentials(credentialDto: CredentialsDto) {}
  async authenticatedWithProvider() {}
  async findApp(client_id: string, client_secret: string) {
    return this.prisma.app.findFirst({
      where: {
        app_client_id: client_id,
        app_client_secret: client_secret,
      },
    });
  }
  private async hashPassword(password: string) {
    return password;
  }
}
