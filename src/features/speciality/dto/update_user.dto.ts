import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create_speciality.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
