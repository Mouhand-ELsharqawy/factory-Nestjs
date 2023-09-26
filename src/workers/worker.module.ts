import { Module } from "@nestjs/common";
import { WorkerController } from "./worker.controller";
import { WorkerService } from "./worker.service";
import { MongooseModule } from "@nestjs/mongoose";
import { WorkerClass, WorkerSchema } from "./worker.schema";
@Module({
    imports:[MongooseModule.forFeature([{ 
       name:WorkerClass.name, schema:WorkerSchema
     }])],
    controllers:[WorkerController],
    providers:[WorkerService]
})
export class WorkerModule{}