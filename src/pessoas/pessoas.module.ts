import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import {Pessoa} from "./entities/pessoa.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  exports: [TypeOrmModule],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
