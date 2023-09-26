import { Controller,Get,Body,Param,Delete,Patch,Post } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";
import { Department } from "./department.interface";
import { DepartmentService } from "./department.service";
import { CreateDepartmentDTO } from "./departmentcreate.dto";
import { UpdateDepartmentDTO } from "./departmentupdate.dto";
@Controller("departments")
export class DepartmentController{
    constructor( private readonly departmentservice:DepartmentService ){}
    @Get()
    getAll(): Promise<Department[]>{
        return this.departmentservice.findAll()
    }
    @Get(":id")
    getOne(@Param("id") id:string): Promise<Department>{
        return this.departmentservice.findOne(id)
    }
    @Post()
    create(@Body(
        ValidationPipe
        ) createdepartmentdto:CreateDepartmentDTO): Promise<Department>{
            return this.departmentservice.create(createdepartmentdto);
    }
    @Patch(":id")
    update(@Param("id")id:string, 
    @Body(
        ValidationPipe
        ) updatedepartment:UpdateDepartmentDTO): Promise<Department>{
        return this.departmentservice.update(id,updatedepartment);
    }
    @Delete(":id")
    remove(@Param("id") id:string): Promise<Department>{
        return this.departmentservice.remove(id);
    }
}