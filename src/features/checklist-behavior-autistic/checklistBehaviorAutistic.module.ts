import { Module } from '@nestjs/common';
import { ChecklistBehaviorAutisticService } from './checklistBehaviorAutistic.service';
import { ChecklistBehaviorAutisticController } from './checklistBehaviorAutistic.controller';

@Module({
  controllers: [ChecklistBehaviorAutisticController],
  providers: [ChecklistBehaviorAutisticService],
})
export class ChecklistBehaviorAutisticModule {}
