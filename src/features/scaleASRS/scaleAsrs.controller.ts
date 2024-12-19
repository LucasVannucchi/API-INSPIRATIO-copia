import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScaleAsrsService } from './scaleAsrs.service';
import { CreateScaleAsrDto } from './dto/scaleAsrCreate.dto';
import { UpdateScaleAsrDto } from './dto/scaleAsrUpdate.dto';

@Controller('scale-asrs')
export class ScaleAsrsController {
  constructor(private readonly scaleAsrsService: ScaleAsrsService) {}

  @Post()
  create(@Body() createScaleAsrDto: CreateScaleAsrDto) {
    return this.scaleAsrsService.create(createScaleAsrDto);
  }

  @Get()
  findAll() {
    return this.scaleAsrsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scaleAsrsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScaleAsrDto: UpdateScaleAsrDto) {
    return this.scaleAsrsService.update(+id, updateScaleAsrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scaleAsrsService.remove(+id);
  }
}
