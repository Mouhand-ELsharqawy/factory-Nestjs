import { Controller, Param, Body, Get,Post,Patch,Delete } from "@nestjs/common";
import { CreateRawDTO } from "./rawcreate.dto";
import { ValidationPipe } from "@nestjs/common";
import { Raw } from "./raw.interface";
import { RawService } from "./raw.service";
import { UpdateRawDTO } from "./rawupdate.dto";
@Controller("raws")
export class RawController{
    constructor( private readonly rawserrvice:RawService ){}
    @Get()
    getAll(): Promise<Raw[]>{
        return this.rawserrvice.findAll();
    }
    @Get(":id")
    getOne(@Param("id") id:string): Promise<Raw>{
        return this.rawserrvice.findOne(id);
    }
    @Post()
    create(@Body(
        ValidationPipe
        ) createrawdto: CreateRawDTO): Promise<Raw>{
            return this.rawserrvice.create(createrawdto);
    }
    @Patch(":id")
    update(@Param("id") id:string, @Body(ValidationPipe) updaterawdto:UpdateRawDTO): Promise<Raw>{
        return this.rawserrvice.update(id,updaterawdto);
    }
    @Delete(":id")
    delete(@Param("id") id:string): Promise<Raw>{
        return this.rawserrvice.remove(id);
    }
}