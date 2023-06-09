import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      // コードファーストで開発を進める場合に、nest で自動生成されるgraphqlのスキーマの出力先を指定
      autoSchemaFile: join(process.cwd(), 'src/@generated/graphql/schema.gql'),
    }),
    TaskModule,
    PrismaModule,
    UserModule,
  ],
})
export class AppModule {}
