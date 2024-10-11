import { Schema, Document } from 'mongoose';
import { Roles } from '../types/Roles';
import { Speciality } from 'src/types/speciality';
import { HmacSHA512 } from 'crypto-js';

// atendimentos
export const specialitySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  desciption: {type: String, required: true},
  password: { type: String, required: false, select: false }
});

export interface IspecialityEntity extends Omit<Speciality, '_id'>, Document {}
