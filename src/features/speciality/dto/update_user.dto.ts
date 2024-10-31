import { PartialType } from '@nestjs/swagger';
import { CreateSpecialityDto } from './create_speciality.dto';

export class UpdateUserDto extends PartialType(CreateSpecialityDto) {}
