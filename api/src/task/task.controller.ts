import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './shared/task.service/task.service';
import { Task } from './shared/task/task';

@Controller('task')
export class TaskController {

    constructor(
        private taskService: TaskService

    ){}

    @Get()
    async getAll() : Promise<Task[]> {
        return this.taskService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Task> {
        return this.taskService.getById(id);
    }

    @Post()
    async create(@Body() task : Task): Promise<Task> {
        return this.taskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task : Task) : Promise<Task> {
        return this.taskService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.taskService.delete(id)
     }
}
