import { Test, TestingModule } from '@nestjs/testing';
import { ChecklistBehaviorAutisticService } from './checklistBehaviorAutistic.service';

describe('ChecklistBehaviorAutisticService', () => {
  let service: ChecklistBehaviorAutisticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChecklistBehaviorAutisticService],
    }).compile();

    service = module.get<ChecklistBehaviorAutisticService>(ChecklistBehaviorAutisticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
