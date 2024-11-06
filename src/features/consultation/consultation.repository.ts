import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

//import { User } from 'src/types/User';
import { Consultation } from 'src/types/consultation';
import { CreateConsultationDto } from './dto/create_consultation.dto';
import { IConsultationEntity } from 'src/entities/consultations.entity';
import { UpdateConsultationyDto } from './dto/update_consultation.dto';
import { QueryConsultationDto } from './dto/query_consultation.dto';
//import { Speciality } from 'src/types/speciality';

@Injectable()
export class ConsultationRepository {
  constructor(
    @InjectModel('Consultation') private readonly consultationModel: Model<IConsultationEntity>,
  ) {}

  async createSpeciality(data: CreateConsultationDto): Promise<Consultation> {
    return this.consultationModel.create(data);
  }

  async findAll(options: QueryConsultationDto) {
    const {
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

    const data = await this.consultationModel
      .find(query)
      .populate('companies')
      .lean()
      .exec();

    const total = await this.consultationModel.countDocuments(query).exec();

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

  async findByToken(token: string): Promise<Consultation> {
    return this.consultationModel.findOne({ passwordResetToken: token }).lean().exec();
  }

  async findById(id: string): Promise<Consultation> {
    return this.consultationModel.findById(id).populate('companies').lean().exec();
  }

  async update(id: string, data: UpdateConsultationyDto): Promise<Consultation> {
    return this.consultationModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('companies')
      .lean()
      .exec();
  }


  async delete(id: string): Promise<Consultation> {
    return this.consultationModel.findByIdAndDelete(id).exec();
  }
}
