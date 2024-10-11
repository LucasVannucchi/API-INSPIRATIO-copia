import { Address } from './Address';
import { Roles } from './Roles';
import { Psyco } from './psyco';
import { Admin } from './admin';
import { Patients } from './patients';
import { Speciality } from './speciality';

export interface User {
  _id?: string;
  name: string;
  cpf: string;
  rg?: string;
  email: string;
  phone: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  address: Address;
  admin: Admin;
  psyco: Psyco;
  patients: Patients;
  speciality: Speciality;
  roles: Roles[];
}

export type Auth = {
  user: User;
  access_token: string;
};

 
