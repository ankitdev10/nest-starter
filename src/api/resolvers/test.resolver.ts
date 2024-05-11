import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QueryGreetArgs } from 'src/generated';
import { TestService } from '../../services/test.service';
import { RequestContext } from '../request-context';
import { Transaction } from 'src/core/transaction/transaction.decorator';

@Resolver()
export class TestResolver {
  constructor(private testService: TestService) {}
  @Query()
  async greet(@Context() ctx: RequestContext, @Args() args: QueryGreetArgs) {
    return this.testService.greet(args);
  }

  @Mutation()
  @Transaction()
  async createUser(@Context() ctx: RequestContext, @Args() user: any) {
    return this.testService.createUser(ctx, user);
  }
}
