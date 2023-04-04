import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  description?: string;
}
