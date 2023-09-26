import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class WorkerClass extends Document{
    @Prop()
    firstname:string;
    @Prop()
    meduimname:string;
    @Prop()
    lastname:string;
    @Prop()
    gender:string;
    @Prop()
    birthdate:string;
    @Prop()
    phone:string;
    @Prop()
    email:string;
    @Prop()
    ssn:string;
    @Prop()
    salary:number;
    @Prop()
    address:string;
    @Prop()
    position:string;
}

export const WorkerSchema = SchemaFactory.createForClass(WorkerClass)