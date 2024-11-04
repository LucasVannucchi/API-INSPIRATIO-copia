import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

// Um parâmetro opcional para paginação
export class QueryDto {
  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false })
  page?: number;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false })
  limit?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  cpf?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  role?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({ required: false })
  email?: string;

  @IsOptional() 
  @IsDate() //Valida que o valor fornecido para o campo é uma data válida (Date).
  @ApiProperty({ required: false }) //Este decorator é específico do Swagger, utilizado para gerar documentação de APIs.
  dateInit?: Date; //representariam o intervalo de tempo para filtrar os resultados.

  @IsOptional()
  @IsDate()
  @ApiProperty({ required: false })
  dateEnd?: Date; // representariam o intervalo de tempo para filtrar os resultados.


}
