import { Injectable } from '@nestjs/common';
import { CreateScaleMchatDto } from './dto/scaleMChatCreate.dto';
import { UpdateScaleMchatDto } from './dto/scaleMChatUpdate.dto';

@Injectable()
export class ScaleMchatService {
  create(createScaleMchatDto: CreateScaleMchatDto) {
    return 'This action adds a new scaleMchat';
  }

  findAll() {
    return `This action returns all scaleMchat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scaleMchat`;
  }

  update(id: number, updateScaleMchatDto: UpdateScaleMchatDto) {
    return `This action updates a #${id} scaleMchat`;
  }

  remove(id: number) {
    return `This action removes a #${id} scaleMchat`;
  }
}
