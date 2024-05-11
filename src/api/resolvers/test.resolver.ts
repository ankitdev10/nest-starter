import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { QueryGreetArgs } from 'src/generated';
import { TestService } from '../../services/test.service';
import { RequestContext } from '../request-context';

@Resolver()
export class TestResolver {
  constructor(private testService: TestService) {}
  @Query()
  async greet(@Context() ctx: RequestContext, @Args() args: QueryGreetArgs) {
    return this.testService.greet(args);
  }
}
