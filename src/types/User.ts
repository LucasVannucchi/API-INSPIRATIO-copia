import { Address } from './Address';
import { Roles } from './Roles';
import { Doctor } from './doctor';
import { Admin } from './admin';
import { Patients } from './patients';
import { Speciality } from './speciality';
import { Doc } from 'prettier';

export interface User {
  _id?: string;
  name: string;
  dataBirthday: Date;
  cpf: string;
  rg?: string;
  email: string;
  phone: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  address: Address;
  admin: Admin;
  doctor: Doctor;
  patients: Patients;
  speciality: Speciality;
  roles: Roles[];
}

export type Auth = {
  user: User;
  access_token: string;
};

 
