export interface Admin{
    _id: String;
    name: String;
    cpf: string;
    rg?: string;
    email: string;
    phone: string;
    password: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    lastLogin?: Date; // Última vez que o administrador fez login
    role: 'ADMIN'; // Definindo o papel de forma fixa como "ADMIN"
    active: boolean; // Campo para indicar se o administrador está ativo
}