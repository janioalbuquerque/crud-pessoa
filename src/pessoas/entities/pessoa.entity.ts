import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    idade: number

    @Column({default: false})
    inativo: boolean
}
