import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsNotEmpty()
  dueDate: string;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  description?: string;
}
