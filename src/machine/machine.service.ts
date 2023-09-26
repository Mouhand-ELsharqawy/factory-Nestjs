import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Machineclass } from "./machine.schema";
import { Machine } from "./machine.interface";
import { CreateMachineDTO } from "./machinecreate.dto";
import { UpdateMachineDTO } from "./machineupdate.dto";
@Injectable()
export class MachineService{
    constructor(
        @InjectModel(Machineclass.name)
        private readonly MachineModel: Model<Machineclass>
    ){}
    async findAll(): Promise<Machine[]>{
        return await this.MachineModel.find().exec();
    }
    async findOne(id:string): Promise<Machine>{
        return await this.MachineModel.findOne({_id:id});
    }
    async create(createmachinedto: CreateMachineDTO): Promise<Machine>{
        const newMachine = new this.MachineModel(createmachinedto)
        return await newMachine.save();
    }
    async update(id:string, updatemachinedto:UpdateMachineDTO): Promise<Machine>{
        return await this.MachineModel.findByIdAndUpdate(id,updatemachinedto,{
            new:true
        })
    }
    async remove(id:string): Promise<Machine>{
        return await this.MachineModel.findByIdAndRemove(id);
    }
}