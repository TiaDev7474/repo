import { PartialType } from '@nestjs/mapped-types';
import { CredentialsDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(CredentialsDto) {}
