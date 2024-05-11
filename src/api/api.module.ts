import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServicesModule } from 'src/services/services.module';
import { TestResolver } from './resolvers/test.resolver';
import { RequestContext } from './request-context';

const resolvers = [TestResolver];

@Module({
  imports: [
    ServicesModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [],
      imports: [ServicesModule],
      useFactory: () => {
        return {
          playground: true,
          introspection: true,
          typePaths: ['./**/*.graphql'],
          resolvers: [],
          context: ({ req, res }) => {
            const ctx = new RequestContext({ req, res });
            console.log(ctx);
            return ctx;
          },
        };
      },
    }),
  ],
  providers: [...resolvers],
})
export class ApiModule {}
