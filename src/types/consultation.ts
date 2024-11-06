import { Doctor } from './doctor';
import { Patients } from './patients';
import { Speciality } from './speciality';

export interface Consultation{
    doctor: string,
    patient: string,
    speciality: string,
    observation: string,
    date: Date,
    status: string,
};