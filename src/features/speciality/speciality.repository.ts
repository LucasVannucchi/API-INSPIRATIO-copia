import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecialityDto } from './dto/create_speciality.dto';
import { UpdateSpecialityDto } from './dto/update_speciality.dto';
import { QuerySpecialityDto } from './dto/query_speciality.dto';
import { ISpecialityEntity } from 'src/entities/speciality.entity';
import { Speciality } from 'src/types/speciality';

@Injectable()
export class SpecialityRepository {
  constructor(
    @InjectModel('Speciality') private readonly specialityModel: Model<ISpecialityEntity>,
  ) {}

  async createSpeciality(data: CreateSpecialityDto): Promise<Speciality> {
    return this.specialityModel.create(data);
  }

  async findAll(options: QuerySpecialityDto) {
    const {
      name = '',
      dateEnd = null,
      dateInit = null,
      role = '',
    } = options; 

    let query = {};



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
      .lean()
      .exec();

    const total = await this.specialityModel.countDocuments(query).exec();

    return { data, total,};
  }

 

  async findById(id: string): Promise<Speciality> {
    return this.specialityModel
    .findById(id)
    .select('name')
    .select('description')
    .lean()
    .exec();
    
  }

  async update(id: string, data: UpdateSpecialityDto): Promise<Speciality> {
    return this.specialityModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('speciality')
      .lean()
      .exec();
  }


  async delete(id: string): Promise<Speciality> {
    return this.specialityModel.findByIdAndDelete(id).exec();
  }
}
