import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class WarehouseClass extends Document{
    @Prop()
    id:UUID;
    @Prop()
    name:string;
    @Prop()
    size:string;
    @Prop()
    address:string;
}
export const WarehouseSchema = SchemaFactory.createForClass(WarehouseClass)