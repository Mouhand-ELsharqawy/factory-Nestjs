import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VisitorClass } from "./visitor.schema";
import { Visitor } from "./visitor.interface";
import { CreateVisitorDTO } from "./visitorcreate.dto";
import { UpdateVisitorDTO } from "./visitorupdate.dto";
@Injectable()
export class VisitorService{
    constructor(
        @InjectModel( VisitorClass.name )
        private readonly VisitorModel: Model<VisitorClass>
    ){}
    async findAll(): Promise<Visitor[]>{
        return await this.VisitorModel.find().exec();
    }
    async findOne(id:string): Promise<Visitor>{
        return await this.VisitorModel.findOne({_id:id})
    }
    async create(createvisitordto:CreateVisitorDTO): Promise<Visitor>{
        const newVisitor = new this.VisitorModel(createvisitordto)
        return await newVisitor.save();
    }
    async update(id:string,updatevisitordto:UpdateVisitorDTO): Promise<Visitor>{
        return await this.VisitorModel.findByIdAndUpdate(id,updatevisitordto,{
            new:true
        });
    }
    async delete(id:string): Promise<Visitor>{
        return await this.VisitorModel.findByIdAndRemove(id);
    }
}