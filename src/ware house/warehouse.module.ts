import { Module } from "@nestjs/common";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";
import { MongooseModule } from "@nestjs/mongoose";
import { WarehouseClass,WarehouseSchema } from "./warehouse.schema";
@Module({
    imports:[ MongooseModule.forFeature([{name:WarehouseClass.name,schema:WarehouseSchema}]) ],
    controllers:[WarehouseController],
    providers:[WarehouseService]
})
export class WarehouseModule{}