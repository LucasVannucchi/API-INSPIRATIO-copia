import { PartialType } from '@nestjs/swagger';
import { CreateModifiedChecklistForAutismInToddlerDto } from './modifiedChecklistForAutismInToddlersCreate.dto';

export class UpdateModifiedChecklistForAutismInToddlerDto extends PartialType(CreateModifiedChecklistForAutismInToddlerDto) {}
