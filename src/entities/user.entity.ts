import { Schema, Document } from 'mongoose';
import { Roles, UserTypes } from '../types/Roles';
import { User } from '../types/User';
import { HmacSHA512 } from 'crypto-js';
import { userInfo } from 'os';
import { UserValidator } from 'src/core/auth/validators/validate-user.validator';

export const UserSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  age: { type: Number, required: false },
  cpf: { type: String, required: false },
  rg: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: false, select: false },
  passwordResetToken: { type: String, required: false, select: false },
  type: [{ type: String, default: 'user', enum: UserTypes, required: true }],
  patients: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User',  // Referencia o modelo de paciente
    required: false
  }],
  responsible: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User',  // Referencia o modelo de responsável
    required: false
  }],
  doctors: [{
    type: Schema.Types.ObjectId,
    ref: 'User',  // Referencia o modelo de médico
    required: false
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
  roles: [{ type: String, enum: Roles, default: Roles.USER, required: true }],
});

// Middleware de pré-salvamento
/* - Se o campo de senha estiver presente, o middleware gera um hash criptografado usando HMAC-SHA512, com um valor "salt"
(PASSWORD_SALT) definido no ambiente.
O valor da senha é então substituído pelo hash.
O método next() é chamado para continuar o fluxo de salvamento.*/
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

// Ele verifica se uma nova senha foi enviada na atualização.
//Se houver uma senha, ela é criptografada com HMAC-SHA512, como no gancho de salvamento.
//A senha no documento de atualização é substituída pelo hash.
//next() continua o fluxo de atualização.
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
