import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/types/User';
import { Roles } from 'src/types/Roles';

export class CreateConsultationDto {
  @IsString() //precisa ser string - validando o dado antes de chegar no serviço
  @IsNotEmpty() //nao pode ir vazia - validando o dado antes de chegar no serviço
  @ApiProperty() // propriedade de API - documentando dentro do swagger
  doctor: string;
  

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  patients: String;

  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  speciality: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string


  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ enum: Roles, type: 'string', isArray: true })
  roles: Roles[]; 
}
