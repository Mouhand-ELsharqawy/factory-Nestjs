import { Controller,Get ,Patch,Post,Param,Body, Delete } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";
import { VisitorService } from "./visitor.service";
import { Visitor } from "./visitor.interface";
import { CreateVisitorDTO } from "./visitorcreate.dto";
import { UpdateVisitorDTO } from "./visitorupdate.dto";
@Controller("visitors")
export class VisitorController{
    constructor( private readonly visitorservice:VisitorService ){}

    @Get()
    getAll(): Promise<Visitor[]>{
        return this.visitorservice.findAll();
    }
    @Get(":id")
    getOne(@Param("id") id:string): Promise<Visitor>{
        return this.visitorservice.findOne(id);
    }
    @Post()
    create(@Body(ValidationPipe) createvisitordto:CreateVisitorDTO ): Promise<Visitor>{
        return this.visitorservice.create(createvisitordto);
    }
    @Patch(":id")
    update(@Param("id") id:string, 
    @Body(ValidationPipe) updatevisitordto:UpdateVisitorDTO): Promise<Visitor>{
        return this.visitorservice.update(id,updatevisitordto);
    }
    @Delete(":id")
    delete(@Param("id") id:string):Promise<Visitor>{
        return this.visitorservice.delete(id);
    }
}