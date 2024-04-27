import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePessoaDto {
    @IsString()
    nome: string;

    @IsString()
    telefone: string;

    @IsNumber()
    idade: number;

    @IsBoolean()
    inativo: boolean;
}