import { Injectable } from '@nestjs/common';
import { CreateScaleAsrDto } from './dto/scaleAsrCreate.dto';
import { UpdateScaleAsrDto } from './dto/scaleAsrUpdate.dto';

@Injectable()
export class ScaleAsrsService {
  create(createScaleAsrDto: CreateScaleAsrDto) {
    return 'This action adds a new scaleAsr';
  }

  findAll() {
    return `This action returns all scaleAsrs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scaleAsr`;
  }

  update(id: number, updateScaleAsrDto: UpdateScaleAsrDto) {
    return `This action updates a #${id} scaleAsr`;
  }

  remove(id: number) {
    return `This action removes a #${id} scaleAsr`;
  }
}
