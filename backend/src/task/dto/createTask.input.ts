import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;
}
