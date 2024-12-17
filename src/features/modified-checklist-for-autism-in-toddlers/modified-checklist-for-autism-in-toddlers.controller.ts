import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModifiedChecklistForAutismInToddlersService } from './modified-checklist-for-autism-in-toddlers.service';
import { CreateModifiedChecklistForAutismInToddlerDto } from './dto/create-modified-checklist-for-autism-in-toddler.dto';
import { UpdateModifiedChecklistForAutismInToddlerDto } from './dto/update-modified-checklist-for-autism-in-toddler.dto';

@Controller('modified-checklist-for-autism-in-toddlers')
export class ModifiedChecklistForAutismInToddlersController {
  constructor(private readonly modifiedChecklistForAutismInToddlersService: ModifiedChecklistForAutismInToddlersService) {}

  @Post()
  create(@Body() createModifiedChecklistForAutismInToddlerDto: CreateModifiedChecklistForAutismInToddlerDto) {
    return this.modifiedChecklistForAutismInToddlersService.create(createModifiedChecklistForAutismInToddlerDto);
  }

  @Get()
  findAll() {
    return this.modifiedChecklistForAutismInToddlersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modifiedChecklistForAutismInToddlersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModifiedChecklistForAutismInToddlerDto: UpdateModifiedChecklistForAutismInToddlerDto) {
    return this.modifiedChecklistForAutismInToddlersService.update(+id, updateModifiedChecklistForAutismInToddlerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modifiedChecklistForAutismInToddlersService.remove(+id);
  }
}
