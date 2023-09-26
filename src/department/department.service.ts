import { Injectable } from "@nestjs/common";
import { DepartmentClass } from "./department.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Department } from "./department.interface";
import { CreateDepartmentDTO } from "./departmentcreate.dto";
import { UpdateDepartmentDTO } from "./departmentupdate.dto";
@Injectable()
export class DepartmentService{
    constructor(
        @InjectModel(DepartmentClass.name)
        private readonly DepartmentModel: Model<DepartmentClass>
    ){}
    async findAll(): Promise<Department[]>{
        return await this.DepartmentModel.find().exec()
    }
    async findOne(id:string): Promise<Department>{
        return await this.DepartmentModel.findOne({_id:id});
    }
    async create(createdepartmentdto: CreateDepartmentDTO): Promise<Department>{
        const newDepartment = new this.DepartmentModel(createdepartmentdto)
        return await newDepartment.save()
    }
    async update(id:string,updatedepartmentdto: UpdateDepartmentDTO): Promise<Department>{
        return await this.DepartmentModel.findByIdAndUpdate(id,updatedepartmentdto,{
            new:true
        })
    }
    async remove(id:string): Promise<Department>{
        return await this.DepartmentModel.findByIdAndRemove(id);
    }
}