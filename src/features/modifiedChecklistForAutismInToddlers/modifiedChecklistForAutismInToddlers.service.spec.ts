import { Test, TestingModule } from '@nestjs/testing';
import { ModifiedChecklistForAutismInToddlersService } from './modifiedChecklistForAutismInToddlers.service';

describe('ModifiedChecklistForAutismInToddlersService', () => {
  let service: ModifiedChecklistForAutismInToddlersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModifiedChecklistForAutismInToddlersService],
    }).compile();

    service = module.get<ModifiedChecklistForAutismInToddlersService>(ModifiedChecklistForAutismInToddlersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
