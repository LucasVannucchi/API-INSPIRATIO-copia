export interface Responsible {
    _id: string;
    name: string; // Nome do responsável
    relation: string; // Relação com o paciente (por exemplo, "Mãe", "Pai", "Guardião")
    phone: string; // Telefone do responsável
    email?: string; // Email do responsável (opcional)
  }