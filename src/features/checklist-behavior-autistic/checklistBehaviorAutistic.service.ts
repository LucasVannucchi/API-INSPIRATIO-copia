import { Injectable } from '@nestjs/common';
import { CreateChecklistBehaviorAutisticDto } from './dto/create-checklist-behavior-autistic.dto';
import { UpdateChecklistBehaviorAutisticDto } from './dto/update-checklist-behavior-autistic.dto';

@Injectable()
export class ChecklistBehaviorAutisticService {
  create(createChecklistBehaviorAutisticDto: CreateChecklistBehaviorAutisticDto) {
    return 'This action adds a new checklistBehaviorAutistic';
  }

  findAll() {
    return `This action returns all checklistBehaviorAutistic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checklistBehaviorAutistic`;
  }

  update(id: number, updateChecklistBehaviorAutisticDto: UpdateChecklistBehaviorAutisticDto) {
    return `This action updates a #${id} checklistBehaviorAutistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} checklistBehaviorAutistic`;
  }
}
