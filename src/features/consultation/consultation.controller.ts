import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create_consultation.dto';
import { UpdateConsultationyDto } from './dto/update_consultation.dto';
import { QueryConsultationDto } from './dto/query_consultation.dto';


@ApiTags('Consultaion')
// @UseGuards(JwtAuthGuard)
@Controller('consultations')
export class ConsultationController {
  constructor(private readonly consultations: ConsultationService) {}

  @Post()
  create(@Body() data: CreateConsultationDto) {
    return this.consultations.create(data);
  }

  // @HasRoles(ImportedRoles.ADMIN)
  // @UseGuards(RolesGuard)
  @Get()
  findAll(@Query() query: QueryConsultationDto) {
    return this.consultations.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.consultations.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateConsultationyDto) {
    return this.consultations.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.consultations.delete(id);
  }
}
