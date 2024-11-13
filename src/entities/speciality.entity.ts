import { Schema, Document } from 'mongoose';
import { Roles } from '../types/Roles';
import { Speciality } from 'src/types/speciality';



// atendimentos
export const specialitySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  //doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  description: { type: String, required: true },
});

export interface ISpecialityEntity extends Omit<Speciality, '_id'>, Document {}
