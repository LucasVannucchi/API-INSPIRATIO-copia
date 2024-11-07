import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { SpecialityRepository } from './speciality.repository';
import { UsersRepository } from '../users/users.repository';
import { UpdateSpecialityDto } from './dto/update_speciality.dto';
import { QuerySpecialityDto } from './dto/query_speciality.dto';
import { HmacSHA512 } from 'crypto-js';
import { Speciality } from 'src/types/speciality';

@Injectable()
export class SpecialityService {
  constructor(
    private readonly userRepository: UsersRepository,
    //private readonly mailerService: MailerService,
    private readonly specialityRepository: SpecialityRepository 
  ) {}

  async create(data: CreateSpecialityDto){
    try{
      const speciality = await this.specialityRepository.createSpeciality(data)
      return speciality;
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  };


  async findAll(query: QuerySpecialityDto){
    try{
      return this.specialityRepository.findAll(query)
    } catch (error){
      throw new HttpException(
        {message: error.message},
        HttpStatus.BAD_REQUEST
      );
    }
   } 

   async findById(id: string) {
    try {
      return this.specialityRepository.findById(id);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, data: UpdateSpecialityDto) {
    try {
      return this.specialityRepository.update(id, data);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string) {
    try {
      return this.specialityRepository.delete(id);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}