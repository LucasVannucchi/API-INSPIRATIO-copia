import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChildhoodAutismRatingScaleDTO {
  @IsNotEmpty()
  @ApiProperty()
  interpersonal_relationship: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  imitation: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  emotional_response: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  body_expression: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  use_object: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  adaptation_to_changes: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  use_of_gaze: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  use_of_hearing: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  use_of_taste_smell_and_touch: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  fear_and_nervousness: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  verbal_communication: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  nonverbal_communication: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  activity: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  degree_and_consistency_of_intelligence_responses: number;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  general_impression: number;
}

