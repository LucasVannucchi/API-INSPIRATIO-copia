export interface Psyco {
    _id: String;
    name: String;
    cpf: string;
    rg?: string;
    email: string;
    phone: string;
    password: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    specialties?: string[];
}
