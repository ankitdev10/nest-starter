import { Injectable } from '@nestjs/common';
import { MutationCreateUserArgs, QueryGreetArgs } from 'src/generated';
import { TransactionalConnection } from './common/transaction-connection.service';
import { RequestContext } from 'src/api/request-context';
import { User } from 'src/entities/user.entity';

@Injectable()
export class TestService {
  constructor(private readonly transaction: TransactionalConnection) {}

  greet(args: QueryGreetArgs) {
    return `Hello ${args.name}`;
  }

  async createUser(ctx: RequestContext, user: MutationCreateUserArgs) {
    const savedUser = await this.transaction
      .getRepository(ctx, User)
      .save(new User(user));

    return savedUser.firstName + ' ' + savedUser.lastName;
  }
}
