import { PartialType } from '@nestjs/swagger';
import { CreateScaleAsrDto } from './scaleAsrCreate.dto';

export class UpdateScaleAsrDto extends PartialType(CreateScaleAsrDto) {}
