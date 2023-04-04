import { Field, Int, ObjectType } from '@nestjs/graphql';

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
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

  @Field({ nullable: true })
  description: string;
}
