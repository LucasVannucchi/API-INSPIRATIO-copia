import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/types/User';
import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { IUserEntity } from 'src/entities/user.entity';
import { UpdateSpecialityDto } from './dto/update_speciality.dto';
import { QuerySpecialityDto } from './dto/query_speciality.dto';
import { ISpecialityEntity } from 'src/entities/speciality.entity';
import { Speciality } from 'src/types/speciality';

@Injectable()
export class SpecialityRepository {
  constructor(
    @InjectModel('User') private readonly specialityModel: Model<ISpecialityEntity>,
  ) {}

  async createSpeciality(data: CreateSpecialityDto): Promise<Speciality> {
    return this.specialityModel.create(data);
  }

  async findAll(options: QuerySpecialityDto) {
    const {
      dateEnd = null,
      dateInit = null,
      email = '',
      role = '',
    } = options; 

    let query = {};

    if (email) {
      query = { ...query, email: { $regex: new RegExp(email, 'i') } };
    }


    if (role) {
      query = { ...query, roles: { $in: role } };
    }

    if (dateInit && dateEnd) {
      query = {
        ...query,
        createdAt: {
          $gte: new Date(dateInit),
          $lte: new Date(dateEnd),
        },
      };
    }

    const data = await this.specialityModel
      .find(query)
      .populate('companies')
      .lean()
      .exec();

    const total = await this.specialityModel.countDocuments(query).exec();

    return { data, total,};
  }

  /*async findByEmail(email: string): Promise<Speciality> {
    return this.userModel
      .findOne({ email })
      .select('+password')
      .select('+passwordResetToken')
      .select('+passwordResetExpires')
      .populate('companies')
      .lean()
      .exec();
  }*/

  async findByToken(token: string): Promise<Speciality> {
    return this.specialityModel.findOne({ passwordResetToken: token }).lean().exec();
  }

  async findById(id: string): Promise<Speciality> {
    return this.specialityModel.findById(id).populate('companies').lean().exec();
  }

  async update(id: string, data: UpdateSpecialityDto): Promise<Speciality> {
    return this.specialityModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('companies')
      .lean()
      .exec();
  }


  async delete(id: string): Promise<Speciality> {
    return this.specialityModel.findByIdAndDelete(id).exec();
  }
}
