import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateConsultationDto {
  @IsString() //precisa ser string - validando o dado antes de chegar no serviço
  @IsNotEmpty() //nao pode ir vazia - validando o dado antes de chegar no serviço
  @ApiProperty() // propriedade de API - documentando dentro do swagger
  doctor: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  patient: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  speciality: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  date: Date | string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  observation?: string;
}
