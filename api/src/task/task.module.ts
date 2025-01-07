import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './shared/task.service/task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schemas';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])
    ],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {}
