import { Controller,Get,Delete,Patch,Post,Param,Body } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";
import { Warehouse } from "./warehouse.interface";
import { WarehouseService } from "./warehouse.service";
import { CreateWarehouseDTO } from "./warehousecreate.dto";
import { UpdateWarehouseDTO } from "./wharehouseupdate.dto";
@Controller("warehouse")
export class WarehouseController{
    constructor(private readonly warehouseservice:WarehouseService){}
    @Get()
    getAll():Promise<Warehouse[]>{
        return this.warehouseservice.findAll();
    }
    @Get(":id")
    getOne(@Param("id") id:string): Promise<Warehouse>{
        return this.warehouseservice.findOne(id);
    }
    @Post()
    insert(@Body(ValidationPipe) createwarehousedto:CreateWarehouseDTO): Promise<Warehouse>{
        return this.warehouseservice.create(createwarehousedto);
    }
    @Patch(":id")
    update(@Param("id") id:string, @Body() createwarehousedto:CreateWarehouseDTO): Promise<Warehouse> {
        return this.warehouseservice.update(id,createwarehousedto);
    }
    @Delete("id")
    remove(@Param("id") id:string): Promise<Warehouse>{
        return this.warehouseservice.delete(id);
    }
}