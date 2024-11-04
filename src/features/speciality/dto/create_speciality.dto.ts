import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AddressDto } from 'src/commons/dtos/Address.dto';
import { Roles } from 'src/types/Roles';

export class CreateSpecialityDto {
  @IsString() //precisa ser string - validando o dado antes de chegar no serviço
  @IsNotEmpty() //nao pode ir vazia - validando o dado antes de chegar no serviço
  @ApiProperty() // propriedade de API - documentando dentro do swagger
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  psyco: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  patients: String;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ enum: Roles, type: 'string', isArray: true })
  roles: Roles[];
}
