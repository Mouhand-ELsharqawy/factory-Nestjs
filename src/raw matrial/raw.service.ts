import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Raw } from "./raw.interface";
import { RawClass } from "./raw.schema";
import { CreateRawDTO } from "./rawcreate.dto";
import { UpdateRawDTO } from "./rawupdate.dto";
@Injectable()
export class RawService{
    constructor(
        @InjectModel(RawClass.name)
        private readonly RawModel: Model<RawClass>
    ){}
    async findAll(): Promise<Raw[]>{
        return await this.RawModel.find().exec();
    }
    async findOne(id:string): Promise<Raw>{
        return await this.RawModel.findOne({_id:id});
    }
    async create(createrawdto:CreateRawDTO): Promise<Raw>{
        const newRaw = new this.RawModel(createrawdto);
        return await newRaw.save();
    }
    async update(id:string, updaterawdto:UpdateRawDTO): Promise<Raw>{
        return await this.RawModel.findByIdAndUpdate(id,updaterawdto,{
            new:true
        })
    }
    async remove(id): Promise<Raw>{
        return await this.RawModel.findByIdAndDelete(id);
    }
}