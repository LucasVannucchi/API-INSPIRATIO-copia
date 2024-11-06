import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

import { CreateConsultationDto } from './dto/create_consultation.dto';
import { ConsultationRepository } from './consultation.repository';
import { UsersRepository } from '../users/users.repository';
import { UpdateConsultationyDto } from './dto/update_consultation.dto';
import { QueryConsultationDto } from './dto/query_consultation.dto';
import { HmacSHA512 } from 'crypto-js';
import { Speciality } from 'src/types/speciality';

@Injectable()
export class ConsultationService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly mailerService: MailerService,
    private readonly ConsultationRepository: ConsultationRepository 
  ) {}

  async create(data: CreateConsultationDto) {
    try {
      const user = await this.ConsultationRepository.createSpeciality(data)

      return user;
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(query: QueryConsultationDto) {
    try {
      return this.userRepository.findAll(query);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByEmail(email: string) {
    try {
      return this.userRepository.findByEmail(email);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findById(id: string) {
    try {
      return this.userRepository.findById(id);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, data: any) {
    try {
      return this.userRepository.update(id, data);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string) {
    try {
      return this.userRepository.delete(id);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}