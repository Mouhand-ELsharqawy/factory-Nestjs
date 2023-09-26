import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductClass } from "./prouct.schema";
import { Product } from "./product.interface";
import { CreateProductDTO } from "./productcreate.dto";
import { UpdateProductDTO } from "./productupdate.dto";
@Injectable()
export class ProductService{
    constructor(
        @InjectModel(ProductClass.name)
        private readonly ProductModel: Model<ProductClass>
    ){}
    async findAll(): Promise<Product[]>{
        return await this.ProductModel.find().exec();
    }
    async findOne(id:string): Promise<Product>{
        return await this.ProductModel.findOne({_id:id});
    }
    async create(createproductdto: CreateProductDTO): Promise<Product>{
        const newProduct = new this.ProductModel(createproductdto);
        return await newProduct.save();
    }
    async Update(id:string,updateproductdto: UpdateProductDTO): Promise<Product>{
        return await this.ProductModel.findByIdAndUpdate(id,updateproductdto,{
            new:true
        })
    }
    async remove(id:string): Promise<Product>{
        return await this.ProductModel.findByIdAndRemove(id);
    }
}