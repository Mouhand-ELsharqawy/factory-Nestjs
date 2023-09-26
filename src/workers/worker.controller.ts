import { Body, Controller,Get,Param,ParseUUIDPipe ,Post ,Patch ,Delete , ValidationPipe } from "@nestjs/common";
import { WorkerService } from "./worker.service";
import { Worker } from "./worker.interface";
import { UUID } from "crypto";
import { CreateWorkerDTO } from "./workercreate.dto";
import { UpdateWorkerDTO } from "./workerupdate.dto";
import { UUIDVersion } from "class-validator";
@Controller('/workers')
export class WorkerController{
    constructor( private readonly workerservice:WorkerService ){}
    @Get()
    getAll():Promise<Worker[]>{
        return this.workerservice.findAll();
    }
    
    @Get(':id')
    getOne(@Param('id') id:string ): Promise<Worker>{
        return this.workerservice.findOne(id);
    }

    @Post()
    insert(@Body(ValidationPipe) createworkerdto:CreateWorkerDTO  ): Promise<Worker>{
        return this.workerservice.create(createworkerdto);
    }

    @Patch(":id")
    update(@Param("id") id,@Body(ValidationPipe) updateworkerdto:UpdateWorkerDTO): Promise<Worker>{
        return this.workerservice.update(id,updateworkerdto);
    }

    @Delete(":id")
    delete(@Param("id") id): Promise<Worker>{
        return this.workerservice.delete(id)
    }
}