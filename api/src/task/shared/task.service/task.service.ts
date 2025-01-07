import { Injectable } from '@nestjs/common';
import { Task } from '../task/task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
//CRUD
export class TaskService {

   constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

   async getAll(): Promise<Task[]> {
      // Usando lean() para retornar um objeto simples
      return this.taskModel.find().lean().exec();
   }

   async getById(id: string): Promise<Task | null> {
      return this.taskModel.findById(id).lean().exec();
   }

   async create(task: Task): Promise<Task> {
      const createdTask = new this.taskModel(task);
      return await createdTask.save();
   }

   async update(id: string, task: Task): Promise<Task | null> {
      const updatedTask = await this.taskModel.findByIdAndUpdate(id, task, { new: true }).lean().exec();
      return updatedTask;  
   }

   async delete(id: string): Promise<{ deletedCount: number }> {
      return await this.taskModel.deleteOne({ _id: id }).exec();
   }
}
