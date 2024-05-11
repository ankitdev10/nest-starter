import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Observable, catchError, concatMap, finalize } from 'rxjs';
import { ENTITY_MANAGER_KEY } from 'src/constant';
import { DataSource } from 'typeorm';

export class TransactionInterceptor implements NestInterceptor {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    console.log(context.switchToHttp().getRequest());
    const req = context.switchToHttp().getRequest();

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    console.log(req);
    req[ENTITY_MANAGER_KEY] = queryRunner.manager;

    return next.handle().pipe(
      concatMap(async (data) => {
        console.log('=> Commmiting');
        await queryRunner.commitTransaction();
        return data;
      }),
      catchError(async (err) => {
        console.log('=> Rollback');
        await queryRunner.rollbackTransaction();
        throw err;
      }),
      finalize(async () => {
        console.log('=> Releasing');
        await queryRunner.release();
      }),
    );
  }
}
