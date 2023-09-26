import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class RawClass extends Document{
    @Prop()
    id:UUID;
    @Prop()
    name: string;
    @Prop()
    quantity:number;
    @Prop()
    price:number;
    @Prop()
    expirationdate:string;
}

export const RawSchema = SchemaFactory.createForClass(RawClass);