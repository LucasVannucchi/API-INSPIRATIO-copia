import { PartialType } from "@nestjs/swagger";
import { CreateChildhoodAutismRatingScaleDTO } from "./childhoodAutismRatingScaleCreate.dto";

export class FunctionalIndependencyMetricsUpdateDTO extends PartialType(CreateChildhoodAutismRatingScaleDTO) {
}