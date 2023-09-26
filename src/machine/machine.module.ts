import { Module } from "@nestjs/common";
import { MachineController } from "./machine.controller";
import { MachineService } from "./machine.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Machineclass,MachineSchema } from "./machine.schema";
@Module({
    imports:[MongooseModule.forFeature([{name:Machineclass.name, schema:MachineSchema}])],
    controllers:[MachineController],
    providers:[MachineService]
})
export class MachineModule{}