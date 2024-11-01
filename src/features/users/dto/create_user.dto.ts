import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { AddressDto } from 'src/commons/dtos/Address.dto';
import { Roles, UserTypes } from 'src/types/Roles';

export class CreateUserDto {
  @IsString() //precisa ser string - validando o dado antes de chegar no serviço
  @IsNotEmpty() //nao pode ir vazia - validando o dado antes de chegar no serviço
  @ApiProperty() // propriedade de API - documentando dentro do swagger
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  cpf?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  rg?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  password: string;

  @IsOptional()
  @ApiProperty({ type: AddressDto })
  address?: AddressDto;

  @IsString()
  @IsOptional()
  @IsArray({ each: true })
  @ApiProperty()
  doctor: Types.ObjectId[];

  @IsString()
  @IsOptional()
  @IsArray({ each: true })
  @ApiProperty()
  responsible: Types.ObjectId[];

  @IsString()
  @IsOptional()
  @IsArray({ each: true })
  @ApiProperty()
  patients: Types.ObjectId[];
  
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ enum: Roles, type: 'string', isArray: true })
  roles: Roles[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ enum: UserTypes, type: 'string', isArray: true })
  type: UserTypes[];
}
