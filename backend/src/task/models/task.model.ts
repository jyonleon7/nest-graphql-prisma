import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

// graphql のスキーマを生成するために、class に対して、@ObjectType() が必要
@ObjectType()
export class Task {
  // @Field は、カラムの
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: Status;

  @Field({ nullable: true })
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
