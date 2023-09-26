import { Controller, Get, Post, Patch, Param, Delete,Body } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ValidationPipe } from "@nestjs/common";
import { Product } from "./product.interface";
import { CreateProductDTO } from "./productcreate.dto";
import { UpdateProductDTO } from "./productupdate.dto";
@Controller("products")
export class ProductController{
    constructor( private readonly productservice:ProductService ){}
    @Get()
    getAll(): Promise<Product[]>{
        return this.productservice.findAll();
    }
    @Get(":id")
    getOne(@Param("id") id:string): Promise<Product>{
        return this.productservice.findOne(id);
    }
    @Post()
    create(@Body(ValidationPipe) createproductdto:CreateProductDTO): Promise<Product>{
        return this.productservice.create(createproductdto);
    }
    @Patch(":id")
    update(@Param("id") id:string ,
    @Body(
        ValidationPipe
        ) updateproductdto:UpdateProductDTO): Promise<Product>{
        return this.productservice.Update(id,updateproductdto);
    }
    @Delete(":id")
    remove(@Param("id") id:string): Promise<Product>{
        return this.productservice.remove(id);
    }

}