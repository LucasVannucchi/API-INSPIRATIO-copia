import { PartialType } from '@nestjs/swagger';
import { CreateChecklistBehaviorAutisticDto } from './create-checklist-behavior-autistic.dto';

export class UpdateChecklistBehaviorAutisticDto extends PartialType(CreateChecklistBehaviorAutisticDto) {}
