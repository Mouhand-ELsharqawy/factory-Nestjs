import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";

@Schema()
export class CustomerClass extends Document{
    @Prop()
    id:UUID;
    
    @Prop()
    firstname:string;

    @Prop()
    meduimname:string;

    @Prop()
    lastname:string;

    @Prop()
    email:string;

    @Prop()
    phone:string;

    @Prop()
    position:string;
}

export const CutomerSchema = SchemaFactory.createForClass(CustomerClass);