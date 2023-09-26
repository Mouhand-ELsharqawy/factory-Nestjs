import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class DepartmentClass extends Document{
    @Prop()
    id:UUID;

    @Prop()
    name:string;

}
export const DepartmentSchema = SchemaFactory.createForClass(DepartmentClass)