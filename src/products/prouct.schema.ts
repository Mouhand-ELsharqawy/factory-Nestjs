import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class ProductClass extends Document{
    @Prop()
    id:UUID;
    @Prop()
    name:string;
    @Prop()
    quantity:number;
    @Prop()
    price:number;
    @Prop()
    description:string;
    @Prop()
    expirationdate:string;
}
export const ProductSchema = SchemaFactory.createForClass(ProductClass);