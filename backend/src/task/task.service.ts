import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async getTasks(userId: number): Promise<Task[]> {
    return await this.prisma.task.findMany({
      where: { userId },
    });
  }

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const { name, dueDate, description, userId } = createTaskInput;
    const newTask = await this.prisma.task.create({
      data: { name, dueDate, description, userId },
    });
    return newTask;
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTaskInput;
    return await this.prisma.task.update({
      where: { id },
      data: { name, dueDate, status, description },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
    if (!task) throw new NotFoundException();
    return await this.prisma.task.delete({ where: { id } });
  }
}
