import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { childhoodAutismRatingScaleService } from "./childhoodAutismRatingScale.service"; 
import { CreateChildhoodAutismRatingScaleDTO } from "./dto/childhoodAutismRatingScaleCreate.dto";



@ApiTags('Childhood Autism Rating Scale')
@Controller('childhood-autism-rating-scale')
export class childhoodAutismRatingScaleController {
  constructor(private readonly ChildhoodAutismRatingScaleService: childhoodAutismRatingScaleService) {}

  @Post()
  create(@Body() data: CreateChildhoodAutismRatingScaleDTO) {
    return this.ChildhoodAutismRatingScaleService.create(data);
  }

  @Get()
  findAll() {
    return this.ChildhoodAutismRatingScaleService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.ChildhoodAutismRatingScaleService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CreateChildhoodAutismRatingScaleDTO) {
    return this.ChildhoodAutismRatingScaleService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ChildhoodAutismRatingScaleService.delete(id);
  }
}
