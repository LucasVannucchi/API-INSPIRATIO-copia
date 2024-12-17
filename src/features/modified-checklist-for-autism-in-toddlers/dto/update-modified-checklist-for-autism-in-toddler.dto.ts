import { PartialType } from '@nestjs/swagger';
import { CreateModifiedChecklistForAutismInToddlerDto } from './create-modified-checklist-for-autism-in-toddler.dto';

export class UpdateModifiedChecklistForAutismInToddlerDto extends PartialType(CreateModifiedChecklistForAutismInToddlerDto) {}
