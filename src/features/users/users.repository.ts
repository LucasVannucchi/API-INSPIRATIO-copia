import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/types/User';
import { CreateUserDto } from './dto/create_user.dto';
import { IUserEntity } from 'src/entities/user.entity';
import { UpdateUserDto } from './dto/update_user.dto';
import { QueryDto } from './dto/query_user.dto';
import { Roles } from 'src/types/Roles';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUserEntity>,
  ) { }

  async findAdmin(): Promise<User | null> {
    return this.userModel.findOne({ roles: { $in: [Roles.ADMIN] } })
    .lean()
    .exec();
  }

  async createUser(data: CreateUserDto): Promise<User> {
    if (data.roles.includes(Roles.ADMIN)) {
      const existingAdmin = await this.findAdmin();
      if (existingAdmin) {
        throw new HttpException(
          { message: 'Já existe um usuário administrador no sistema.' },
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return this.userModel.create(data);
  }

  async findAll(options: QueryDto) {
    const {
      page = 1,
      limit = 10,
      name = '',
      cpf = '',
      dateEnd = null,
      dateInit = null,
      email = '',
      role = '',
    } = options;
    const skip = (page - 1) * limit;
    let query = {};

    if (name) {
      query = { ...query, name: { $regex: new RegExp(name, 'i') } };
    }

    if (email) {
      query = { ...query, email: { $regex: new RegExp(email, 'i') } };
    }

    if (cpf) {
      query = { ...query, cpf: { $regex: new RegExp(cpf, 'i') } };
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

    const data = await this.userModel
      .find(query)
      .skip(skip)
      .limit(limit)
      .populate('patients')
      .populate('doctor')
      .populate('responsible')
      .lean()
      .exec();

    const total = await this.userModel.countDocuments(query).exec();
    const pages = Math.ceil(total / limit);

    return { data, total, page: +page, pages };
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel
      .findOne({ email })
      .select('+password')
      .select('+passwordResetToken')
      .select('+passwordResetExpires')
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .lean()
      .exec();
  }

  /*Este método cria um novo usuário no banco de dados usando os
  dados fornecidos em CreateUser Dto e retorna o usuário criado. */
  async findByToken(token: string): Promise<User> {
    return this.userModel.findOne({ passwordResetToken: token }).lean().exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id)
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .populate('speciality')
      .select('Consultation')
      .lean()
      .exec();
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .lean()
      .exec();
  }

  async forgotPassword(
    id: string,
    data: { passwordResetToken: string; passwordResetExpires: Date },
  ): Promise<User> {
    return this.userModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .populate('patients')
      .populate('doctors')
      .populate('responsible')
      .lean()
      .exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
