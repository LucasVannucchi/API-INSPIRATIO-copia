import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChecklistBehaviorAutisticService } from './checklistBehaviorAutistic.service';
import { CreateChecklistBehaviorAutisticDto } from './dto/checklistBehaviorAutisticCreate.dto';
import { UpdateChecklistBehaviorAutisticDto } from './dto/checklistBehaviorAutisticUpdate.dto';

@Controller('checklist-behavior-autistic')
export class ChecklistBehaviorAutisticController {
  constructor(private readonly checklistBehaviorAutisticService: ChecklistBehaviorAutisticService) {}

  @Post()
  create(@Body() createChecklistBehaviorAutisticDto: CreateChecklistBehaviorAutisticDto) {
    return this.checklistBehaviorAutisticService.create(createChecklistBehaviorAutisticDto);
  }

  @Get()
  findAll() {
    return this.checklistBehaviorAutisticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checklistBehaviorAutisticService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChecklistBehaviorAutisticDto: UpdateChecklistBehaviorAutisticDto) {
    return this.checklistBehaviorAutisticService.update(+id, updateChecklistBehaviorAutisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checklistBehaviorAutisticService.remove(+id);
  }
}
