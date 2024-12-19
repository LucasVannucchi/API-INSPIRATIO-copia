import { Module } from '@nestjs/common';
import { ScaleMchatService } from './scaleMChat.service';
import { ScaleMchatController } from './scaleMChat.controller';

@Module({
  controllers: [ScaleMchatController],
  providers: [ScaleMchatService],
})
export class ScaleMchatModule {}
