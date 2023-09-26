import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class VisitorClass extends Document{
    @Prop()
    id:UUID;
    @Prop()
    number:number;
}
export const VisitorSchema = SchemaFactory.createForClass(VisitorClass)