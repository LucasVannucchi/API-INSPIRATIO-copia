import { PartialType } from '@nestjs/swagger';
import { CreateConsultationDto } from './create_consultation.dto';

export class UpdateConsultationyDto extends PartialType(CreateConsultationDto) {}
