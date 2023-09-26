import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "./customer.interface";
import { CustomerClass } from "./customer.schema";
import { Model } from "mongoose";
import { CreateCustomerDTO } from "./customercreate.dto";
@Injectable()
export class CustomerService{
    constructor(
        @InjectModel(CustomerClass.name)
        private readonly CustomerModel: Model<CustomerClass>
    ){}
    async findAll(): Promise<Customer[]>{
        return await this.CustomerModel.find().exec();
    }

    async findOne(id:string): Promise<Customer>{
        return await this.CustomerModel.findOne({_id:id});
    }

    async create(createcustomerdto: CreateCustomerDTO): Promise<Customer>{
        const newCustomer = new this.CustomerModel(createcustomerdto)
        return await newCustomer.save();
    }
    async update(id:string, updatecustomerdto): Promise<Customer>{
        return await this.CustomerModel.findByIdAndUpdate(id,updatecustomerdto,{
            new:true
        });
    }
    async remove(id:string): Promise<Customer>{
        return await this.CustomerModel.findByIdAndRemove(id);
    }
}