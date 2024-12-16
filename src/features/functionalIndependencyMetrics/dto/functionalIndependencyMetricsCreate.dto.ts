import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class MetricsDTO {
  @IsNotEmpty()
  @ApiProperty()
  independency: number;

  @IsNotEmpty()
  @ApiProperty()
  completeDependency: number;

  @IsNotEmpty()
  @ApiProperty()
  modifiedDependency: number;
}

class SelfCareDTO {
  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  food: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  personalHygiene: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  bath: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  upperBodyDress: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  bottomBodyDress: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  toiletUse: MetricsDTO;
}

class EsfincteresControlDTO {
  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  urineControl: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  fecesControl: MetricsDTO;
}

class MobilityDTO {
  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  badChairAndQheelChair: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  toilet: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  bathOrShower: MetricsDTO;
}

class LocomotionDTO {
  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  wheelchairWalking: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  chairs: MetricsDTO;
}

class ComunicationDTO {
  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  compreention: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  expression: MetricsDTO;
}

class SocialKnowledgeDTO {
  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  socialInteraction: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  problemsResolution: MetricsDTO;

  @ValidateNested()
  @Type(() => MetricsDTO)
  @ApiProperty({ type: MetricsDTO })
  memory: MetricsDTO;
}

export class CreateFunctionalIndependencyMetricDTO {
  @ValidateNested()
  @Type(() => SelfCareDTO)
  @ApiProperty({ type: SelfCareDTO })
  selfCare: SelfCareDTO;

  @ValidateNested()
  @Type(() => EsfincteresControlDTO)
  @ApiProperty({ type: EsfincteresControlDTO })
  esfincteresControl: EsfincteresControlDTO;

  @ValidateNested()
  @Type(() => MobilityDTO)
  @ApiProperty({ type: MobilityDTO })
  mobility: MobilityDTO;

  @ValidateNested()
  @Type(() => LocomotionDTO)
  @ApiProperty({ type: LocomotionDTO })
  locomotion: LocomotionDTO;

  @ValidateNested()
  @Type(() => ComunicationDTO)
  @ApiProperty({ type: ComunicationDTO })
  comunication: ComunicationDTO;

  @ValidateNested()
  @Type(() => SocialKnowledgeDTO)
  @ApiProperty({ type: SocialKnowledgeDTO })
  socialKnowledge: SocialKnowledgeDTO;
}