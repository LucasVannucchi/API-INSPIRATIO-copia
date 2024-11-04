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
import { SpecialityService } from './speciality.service';
import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { UpdateUserDto } from './dto/update_speciality.dto';
import { QueryDto } from './dto/query_speciality.dto';


@ApiTags('Users')
// @UseGuards(JwtAuthGuard)
@Controller('users')
export class SpecialityController {
  constructor(private readonly user: SpecialityService) {}

  @Post()
  create(@Body() data: CreateSpecialityDto) {
    return this.user.create(data);
  }

  // @HasRoles(ImportedRoles.ADMIN)
  // @UseGuards(RolesGuard)
  @Get()
  findAll(@Query() query: QueryDto) {
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
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.user.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.user.delete(id);
  }
}
