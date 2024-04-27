import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoas/pessoas.module';
import {UtilSqlModule} from "./Util/UtilSql/util-sql.module";

@Module({
  imports: [PessoasModule, UtilSqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
