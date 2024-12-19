import { PartialType } from '@nestjs/swagger';
import { CreateScaleMchatDto } from './scaleMChatCreate.dto';

export class UpdateScaleMchatDto extends PartialType(CreateScaleMchatDto) {}
