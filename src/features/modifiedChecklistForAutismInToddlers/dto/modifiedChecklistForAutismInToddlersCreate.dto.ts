import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateModifiedChecklistForAutismInToddlerDto {

  @IsNotEmpty()
  @ApiProperty()
  question_one: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_two: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_three: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_four: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_five: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_six: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_seven: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_eight: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_nine: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_ten: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_eleven: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_twelve: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_thirteen: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_fourten: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_fiveten: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_sixten: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_seventen: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_eightten: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_nineten: string;

  @IsNotEmpty()
  @ValidateNested()
  @ApiProperty()
  question_twenty: string;
}