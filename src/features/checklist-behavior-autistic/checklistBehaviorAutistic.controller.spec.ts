import { Test, TestingModule } from '@nestjs/testing';
import { ChecklistBehaviorAutisticController } from './checklistBehaviorAutistic.controller';
import { ChecklistBehaviorAutisticService } from './checklistBehaviorAutistic.service';

describe('ChecklistBehaviorAutisticController', () => {
  let controller: ChecklistBehaviorAutisticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChecklistBehaviorAutisticController],
      providers: [ChecklistBehaviorAutisticService],
    }).compile();

    controller = module.get<ChecklistBehaviorAutisticController>(ChecklistBehaviorAutisticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
