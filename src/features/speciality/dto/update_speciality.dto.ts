import { PartialType } from '@nestjs/swagger';
import { CreateSpecialityDto } from './create_speciality.dto';

export class UpdateSpecialityDto extends PartialType(CreateSpecialityDto) {}
