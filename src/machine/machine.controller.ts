import { Controller,Post,Get,Param,Delete,Patch,Body } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";
import { MachineService } from "./machine.service";
import { Machine } from "./machine.interface";
import { CreateMachineDTO } from "./machinecreate.dto";
import { UpdateMachineDTO } from "./machineupdate.dto";
@Controller("machines")
export class MachineController{
    constructor( private readonly machineservice: MachineService ){}
    @Get()
    getAll(): Promise<Machine[]>{
        return this.machineservice.findAll();
    }
    @Get(":id")
    getOne(@Param("id") id:string): Promise<Machine>{
        return this.machineservice.findOne(id);
    }
    @Post()
    create(@Body(ValidationPipe) createmachinedto: CreateMachineDTO): Promise<Machine>{
        return this.machineservice.create(createmachinedto);
    }
    @Patch(":id")
    update(@Param("id") id:string,
    @Body(
        ValidationPipe
        ) updatemachinedto:UpdateMachineDTO): Promise<Machine>{
        return this.machineservice.update(id,updatemachinedto);
    }
    @Delete(":id")
    remove(@Param("id") id:string){
        return this.machineservice.remove(id);
    }
}