import { Module } from '@nestjs/common';
import { ScaleAsrsService } from './scaleAsrs.service';
import { ScaleAsrsController } from './scaleAsrs.controller';

@Module({
  controllers: [ScaleAsrsController],
  providers: [ScaleAsrsService],
})
export class ScaleAsrsModule {}
