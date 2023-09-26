import { Schema, Prop ,SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { Document } from "mongoose";
@Schema()
export class Machineclass extends Document{
    @Prop()
    id:UUID;
    @Prop()
    name:string;
    @Prop()
    function:string;
}

export const MachineSchema = SchemaFactory.createForClass(Machineclass);