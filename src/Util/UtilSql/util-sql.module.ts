import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Pessoa} from "../../pessoas/entities/pessoa.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'Janio123',
            database: 'pessoa',
            entities: [Pessoa],
            synchronize: true,
        }),
    ],
})
export class UtilSqlModule {}