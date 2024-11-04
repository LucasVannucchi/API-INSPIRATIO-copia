import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { SpecialityRepository } from './speciality.repository';
import { UsersRepository } from '../users/users.repository';
import { UpdateUserDto } from './dto/update_speciality.dto';
import { QueryDto } from './dto/query_speciality.dto';
import { HmacSHA512 } from 'crypto-js';
import { Speciality } from 'src/types/speciality';

@Injectable()
export class SpecialityService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly mailerService: MailerService,
    private readonly specialityRepository: SpecialityRepository 
  ) {}

  async create(data: CreateSpecialityDto) {
    try {
      const user = await this.specialityRepository.createSpeciality(data)

      return user;
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(query: QueryDto) {
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