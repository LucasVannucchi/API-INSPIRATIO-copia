import { Address } from './Address';
import { Roles } from './Roles';
import { User } from './User';

export interface Speciality {
  _id?: string;
  name: string;
  desciption: string;
}

export type Auth = {
  speciality: User;
  description: String;
}
