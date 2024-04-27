import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import {Pessoa} from "./entities/pessoa.entity";

@Injectable()
export class PessoasService {

  constructor(
      @InjectRepository(Pessoa)
      private pessoaRepository: Repository<Pessoa>,
  ) {}
  create(createPessoaDto: CreatePessoaDto) {
    const novaPessoa = this.pessoaRepository.create(createPessoaDto);
    return this.pessoaRepository.save(novaPessoa);
  }

  findAll() {
    return this.pessoaRepository.find();
  }

  async findOne(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOneBy({ id });
    if (!pessoa) {
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada.`);
    }
    return pessoa;
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOneBy({id});

    if (!pessoa) {
      throw new NotFoundException(`Pessoa com ID ${id} não encontrada.`);
    }

    Object.assign(pessoa, updatePessoaDto);
    await this.pessoaRepository.save(pessoa);

    return pessoa;
  }

  async remove(id: number): Promise<void> {
    await this.pessoaRepository.delete(id);
  }
}
