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


@ApiTags('Consultaions')
// @UseGuards(JwtAuthGuard)
@Controller('consultations')
export class ConsultationController {
  constructor(private readonly user: ConsultationService) {}

  @Post()
  create(@Body() data: CreateConsultationDto) {
    return this.user.create(data);
  }

  // @HasRoles(ImportedRoles.ADMIN)
  // @UseGuards(RolesGuard)
  @Get()
  findAll(@Query() query: QueryConsultationDto) {
    return this.user.findAll(query);
  }

  @Get('email')
  findByEmail(@Query('email') email: string) {
    return this.user.findByEmail(email);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.user.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateConsultationyDto) {
    return this.user.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.user.delete(id);
  }
}
