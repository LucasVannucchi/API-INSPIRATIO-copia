import { PartialType } from "@nestjs/swagger";
import { CreateFunctionalIndependencyMetricDTO } from "./functionalIndependencyMetricsCreate.dto";

export class FunctionalIndependencyMetricsUpdateDTO extends PartialType(CreateFunctionalIndependencyMetricDTO) {
}