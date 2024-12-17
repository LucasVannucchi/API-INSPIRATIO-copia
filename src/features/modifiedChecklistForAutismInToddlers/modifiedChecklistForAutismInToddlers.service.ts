import { Injectable } from '@nestjs/common';
import { CreateModifiedChecklistForAutismInToddlerDto } from './dto/modifiedChecklistForAutismInToddlersCreate.dto';
import { UpdateModifiedChecklistForAutismInToddlerDto } from './dto/modifiedChecklistForAutismInToddlersUpdate.dto';

@Injectable()
export class ModifiedChecklistForAutismInToddlersService {
  create(createModifiedChecklistForAutismInToddlerDto: CreateModifiedChecklistForAutismInToddlerDto) {
    return 'This action adds a new modifiedChecklistForAutismInToddler';
  }

  findAll() {
    return `This action returns all modifiedChecklistForAutismInToddlers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modifiedChecklistForAutismInToddler`;
  }

  update(id: number, updateModifiedChecklistForAutismInToddlerDto: UpdateModifiedChecklistForAutismInToddlerDto) {
    return `This action updates a #${id} modifiedChecklistForAutismInToddler`;
  }

  remove(id: number) {
    return `This action removes a #${id} modifiedChecklistForAutismInToddler`;
  }
}
