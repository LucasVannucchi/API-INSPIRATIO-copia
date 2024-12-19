import { Test, TestingModule } from '@nestjs/testing';
import { ScaleMchatController } from './scaleMChat.controller';
import { ScaleMchatService } from './scaleMChat.service';

describe('ScaleMchatController', () => {
  let controller: ScaleMchatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScaleMchatController],
      providers: [ScaleMchatService],
    }).compile();

    controller = module.get<ScaleMchatController>(ScaleMchatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
