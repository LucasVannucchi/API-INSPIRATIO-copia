import { Module } from '@nestjs/common';
import { ModifiedChecklistForAutismInToddlersService } from './modifiedChecklistForAutismInToddlers.service';
import { ModifiedChecklistForAutismInToddlersController } from './modifiedChecklistForAutismInToddlers.controller';

@Module({
  controllers: [ModifiedChecklistForAutismInToddlersController],
  providers: [ModifiedChecklistForAutismInToddlersService],
})
export class ModifiedChecklistForAutismInToddlersModule {}
