import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FunctionalIndependencyMetricsService } from "./functionalIndependencyMetrics.service";
import { FunctionalIndependencyMetricsUpdateDTO } from "./dto/functionalIndependencyMetricsUpdate.dto";
import { CreateFunctionalIndependencyMetricDTO } from "./dto/functionalIndependencyMetricsCreate.dto";

@ApiTags('Functional Independency Metrics')
@Controller('functional-independency-metrics')
export class FunctionalIndependencyMetricsController {
  constructor(private readonly functionalIndependencyMetricsService: FunctionalIndependencyMetricsService) {}

  @Post()
  create(@Body() data: CreateFunctionalIndependencyMetricDTO) {
    return this.functionalIndependencyMetricsService.create(data);
  }

  @Get()
  findAll() {
    return this.functionalIndependencyMetricsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.functionalIndependencyMetricsService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: FunctionalIndependencyMetricsUpdateDTO) {
    return this.functionalIndependencyMetricsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.functionalIndependencyMetricsService.delete(id);
  }
}