import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TransactionalConnection } from './common/transaction-connection.service';

const services = [TestService, TransactionalConnection];
@Module({
  imports: [],
  controllers: [],
  providers: services,
  exports: services,
})
export class ServicesModule {}
