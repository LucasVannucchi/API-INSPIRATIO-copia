import { Test, TestingModule } from '@nestjs/testing';
import { ScaleAsrsService } from './scaleAsrs.service';

describe('ScaleAsrsService', () => {
  let service: ScaleAsrsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScaleAsrsService],
    }).compile();

    service = module.get<ScaleAsrsService>(ScaleAsrsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
