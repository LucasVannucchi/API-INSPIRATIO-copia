import { Doctor } from "./doctor";
import { Responsible } from "./responsible";

export interface Patients{
  _id: string; // Identificador do paciente
  name: string; // Nome do paciente
  age: number; // Idade do paciente
  doctor: Doctor; // Referência ao doutor (psicólogo/médico responsável)
  responsible: Responsible; // Referência ao responsável (obrigatório se o paciente for menor)
  isSelfResponsible: boolean; // Indica se o paciente é responsável por si mesmo
}