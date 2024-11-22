import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';


export class CreateConsultationDto {
  @IsString() //precisa ser string - validando o dado antes de chegar no serviço
  @IsNotEmpty() //nao pode ir vazia - validando o dado antes de chegar no serviço
  @ApiProperty() // propriedade de API - documentando dentro do swagger
  doctor: string;
  

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  patient: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  speciality: String;

  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  observation: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  date: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string[]

}
