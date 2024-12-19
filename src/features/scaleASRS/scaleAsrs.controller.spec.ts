import { Test, TestingModule } from '@nestjs/testing';
import { ScaleAsrsController } from './scaleAsrs.controller';
import { ScaleAsrsService } from './scaleAsrs.service';

describe('ScaleAsrsController', () => {
  let controller: ScaleAsrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScaleAsrsController],
      providers: [ScaleAsrsService],
    }).compile();

    controller = module.get<ScaleAsrsController>(ScaleAsrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
