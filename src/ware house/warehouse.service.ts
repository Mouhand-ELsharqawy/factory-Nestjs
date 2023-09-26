import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
 import { Model } from "mongoose";
import { WarehouseClass } from "./warehouse.schema";
import { Warehouse } from "./warehouse.interface";
import { CreateWarehouseDTO } from "./warehousecreate.dto";
import { UpdateWarehouseDTO } from "./wharehouseupdate.dto";
@Injectable()
export class WarehouseService{
    constructor(
        @InjectModel(WarehouseClass.name)
        private readonly WarehouseModel: Model<WarehouseClass>
    ){}
    
    async findAll():Promise<Warehouse[]>{
        return await this.WarehouseModel.find().exec();
    }
    async findOne(id:string): Promise<Warehouse>{
        return await this.WarehouseModel.findById(id);
        // return await this.WarehouseModel.findOne({_id:id});
    }
    async create(createwarehousedto:CreateWarehouseDTO): Promise<Warehouse>{
        return await this.WarehouseModel.create(createwarehousedto);
        // const newWarehouse = new this.WarehouseModel(createwarehousedto)
        // return await newWarehouse.save();
    }
    async update(id:string,updatewarehousedto:UpdateWarehouseDTO): Promise<Warehouse>{
        return await this.WarehouseModel.findByIdAndUpdate(id,updatewarehousedto,{
            new:true
        });
    }
    async delete(id:string): Promise<Warehouse>{
        return await this.WarehouseModel.findByIdAndDelete(id);
    }
}