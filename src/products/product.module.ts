import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductClass, ProductSchema } from "./prouct.schema";
@Module({
    imports:[MongooseModule.forFeature([{name: ProductClass.name, schema: ProductSchema}])],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule{}