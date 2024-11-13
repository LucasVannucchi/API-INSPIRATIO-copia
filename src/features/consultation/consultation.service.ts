import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

import { Consultation } from 'src/types/consultation';
import { CreateConsultationDto } from './dto/create_consultation.dto';
import { ConsultationRepository } from './consultation.repository';

import { QueryConsultationDto } from './dto/query_consultation.dto';
//import { Speciality } from 'src/types/speciality';

@Injectable()
export class ConsultationService {
  constructor(
    private readonly ConsultationRepository: ConsultationRepository 
  ) {}

  async create(data: CreateConsultationDto) {
    try {
      const consultation = await this.ConsultationRepository.createConsultation(data)
      
      return consultation;
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(query: QueryConsultationDto) {
    try {
      return this.ConsultationRepository.findAll(query);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }


  async findById(id: string) {
    try {
      return this.ConsultationRepository.findById(id);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, data: any) {
    try {
      return this.ConsultationRepository.update(id, data);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string) {
    try {
      return this.ConsultationRepository.delete(id);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}