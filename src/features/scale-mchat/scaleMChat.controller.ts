import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScaleMchatService } from './scaleMChat.service';
import { CreateScaleMchatDto } from './dto/scaleMChatCreate.dto';
import { UpdateScaleMchatDto } from './dto/scaleMChatUpdate.dto';

@Controller('scale-mchat')
export class ScaleMchatController {
  constructor(private readonly scaleMchatService: ScaleMchatService) {}

  @Post()
  create(@Body() createScaleMchatDto: CreateScaleMchatDto) {
    return this.scaleMchatService.create(createScaleMchatDto);
  }

  @Get()
  findAll() {
    return this.scaleMchatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scaleMchatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScaleMchatDto: UpdateScaleMchatDto) {
    return this.scaleMchatService.update(+id, updateScaleMchatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scaleMchatService.remove(+id);
  }
}
