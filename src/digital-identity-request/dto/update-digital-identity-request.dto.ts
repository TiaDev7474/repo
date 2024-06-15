import { PartialType } from '@nestjs/mapped-types';
import { CreateDigitalIdentityRequestDto } from './create-digital-identity-request.dto';

export class UpdateDigitalIdentityRequestDto extends PartialType(CreateDigitalIdentityRequestDto) {}
