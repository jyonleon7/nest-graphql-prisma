import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      // コードファーストで開発を進める場合に、nest で自動生成されるgraphqlのスキーマの出力先を指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TaskModule,
    PrismaModule,
  ],
})
export class AppModule {}
