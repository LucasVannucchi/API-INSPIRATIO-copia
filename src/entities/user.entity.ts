import { Schema, Document } from 'mongoose';
import { Roles } from '../types/Roles';
import { User } from '../types/User';
import { HmacSHA512 } from 'crypto-js';
import { userInfo } from 'os';
import { UserValidator } from 'src/core/auth/validators/validate-user.validator';

export const UserSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  cpf: { type: String, required: false },
  rg: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: false, select: false },
  passwordResetToken: { type: String, required: false, select: false },
  type: {
    psyco: { type: String, required: true },
    admin: { type: String, required: true },
  },
  patients: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Pacient'  // Referencia o modelo de paciente
  }],
  address: {
    street: { type: String, required: false },
    number: { type: Number, required: false },
    complement: { type: String, required: false },
    neighborhood: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zipcode: { type: String, required: false },
  },
  document: [{type: String, required: false}],
  idDocument: [{type: String, required: false}],
  roles: [{ type: String, enum: Roles, required: true }],
});


export const ResponsibleSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: false },
  relation: { type: String, required: true }, // Exemplo: "Mãe", "Pai", etc.
});

export const PacientSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  responsible: { 
    type: Schema.Types.ObjectId, 
    ref: 'Responsible',  // Referencia o modelo de responsável
    required: true 
  },
});

UserSchema.pre<IUserEntity>(['save'], function (next) {
  if (this.password) {
    const hashPassword = HmacSHA512(
      this.password,
      process.env.PASSWORD_SALT,
    ).toString();

    this.password = hashPassword;
  }
  next();
});

UserSchema.pre<any>('findOneAndUpdate', function (next) {
  const password = this.getUpdate().password;
  if (password) {
    const hashPassword = HmacSHA512(
      password,
      process.env.PASSWORD_SALT,
    ).toString();
    this.getUpdate().password = hashPassword;
  }
  next();
});

export interface IUserEntity extends Omit<User, '_id'>, Document {}
