import { Module } from "@nestjs/common";
import { FunctionalIndependencyMetricsService } from "./functionalIndependencyMetrics.service";
import { FunctionalIndependencyMetricsController } from "./functionalIndependencyMetrics.controller";
import { FunctionalIndependencyMetricsRepository } from "./functionalIndependencyMetrics.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { FunctionalIndependencyMetricsSchema } from "src/entities/functionalIndependencyMetrics.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FunctionalIndependencyMetric', schema: FunctionalIndependencyMetricsSchema }]),
  ],
  providers: [FunctionalIndependencyMetricsService, FunctionalIndependencyMetricsRepository],
  controllers: [FunctionalIndependencyMetricsController],
  exports: [],
})
export class FunctionalIndependencyMetricsModule {}
