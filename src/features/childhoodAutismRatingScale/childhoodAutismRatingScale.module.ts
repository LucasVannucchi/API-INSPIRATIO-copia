import { Module } from "@nestjs/common";
import { childhoodAutismRatingScaleService } from "./childhoodAutismRatingScale.service";
import { childhoodAutismRatingScaleController } from "./childhoodAutismRatingScale.controller";
import { Cars } from "src/entities/childhoodAutismRatingScale";
import { MongooseModule } from "@nestjs/mongoose";
import { childhoodAutismRatingScaleRepository } from "./childhoodAutismRatingScale.repository";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FunctionalIndependencyMetric', schema: Cars }]),
  ],
  providers: [childhoodAutismRatingScaleService, childhoodAutismRatingScaleRepository
   ],
  controllers: [childhoodAutismRatingScaleController],
  exports: [],
})
export class childhoodAutismRatingScaleModule {}

