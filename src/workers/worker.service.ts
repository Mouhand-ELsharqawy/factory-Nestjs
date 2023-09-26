import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Worker } from "./worker.interface";
import { CreateWorkerDTO } from "./workercreate.dto";
import { UpdateWorkerDTO } from "./workerupdate.dto";
import { WorkerClass } from "./worker.schema";
@Injectable()
export class WorkerService{
    constructor(
        @InjectModel(WorkerClass.name)
        private WorkerModel: Model<WorkerClass>
    ){}

    async findAll(): Promise<Worker[]>{
        return await this.WorkerModel.find().exec();
    }
    async findOne(id:string): Promise<Worker>{
        // return await this.WorkerModel.findOne({_id: id});
        return await this.WorkerModel.findOne({_id: id});
    }
    async create( createworkerdto:CreateWorkerDTO ): Promise<Worker>{
        const newWorker =  new this.WorkerModel(createworkerdto);
        return await newWorker.save();
        // return await this.WorkerModel.create({createworkerdto});
    }
    async update(id ,updateworkerdto: UpdateWorkerDTO): Promise<Worker>{
        return await this.WorkerModel.findByIdAndUpdate(id,updateworkerdto,{
            new:true
        });
    }
    async delete(id): Promise<Worker>{
        return await this.WorkerModel.findByIdAndRemove(id);
    }

}