import { Module } from '@nestjs/common';
import { ModifiedChecklistForAutismInToddlersService } from './modified-checklist-for-autism-in-toddlers.service';
import { ModifiedChecklistForAutismInToddlersController } from './modified-checklist-for-autism-in-toddlers.controller';

@Module({
  controllers: [ModifiedChecklistForAutismInToddlersController],
  providers: [ModifiedChecklistForAutismInToddlersService],
})
export class ModifiedChecklistForAutismInToddlersModule {}
