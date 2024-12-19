import { PartialType } from '@nestjs/swagger';
import { CreateChecklistBehaviorAutisticDto } from './checklistBehaviorAutisticCreate.dto';

export class UpdateChecklistBehaviorAutisticDto extends PartialType(CreateChecklistBehaviorAutisticDto) {}
