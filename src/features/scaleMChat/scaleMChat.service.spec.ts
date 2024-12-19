import { Test, TestingModule } from '@nestjs/testing';
import { ScaleMchatService } from './scaleMChat.service';

describe('ScaleMchatService', () => {
  let service: ScaleMchatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScaleMchatService],
    }).compile();

    service = module.get<ScaleMchatService>(ScaleMchatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
