import { Controller,Get,Post,Param,Body,Patch,Delete, ValidationPipe } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { Customer } from "./customer.interface";
import { CreateCustomerDTO } from "./customercreate.dto";
import { UpdateCustomerDTO } from "./customerupdate.dto";
@Controller("customers")
export class CustomerController{
    constructor( private readonly customerservice:CustomerService ){}
    @Get()
    getAll(): Promise<Customer[]>{
        return this.customerservice.findAll()
    }
    @Get(":id")
    getOne(@Param("id")id:string): Promise<Customer>{
        return this.customerservice.findOne(id);
    }
    @Post()
    create(@Body(ValidationPipe) createcustomerdto:CreateCustomerDTO ):Promise<Customer>{
        return this.customerservice.create(createcustomerdto);
    }
    @Patch(":id")
    update(@Param("id") id:string,@Body(ValidationPipe) updatecustomerdto:UpdateCustomerDTO):Promise<Customer>{
        return this.customerservice.update(id,updatecustomerdto);
    }
    @Delete(":id")
    remove(@Param("id") id:string):Promise<Customer>{
        return this.customerservice.remove(id);
    }
}