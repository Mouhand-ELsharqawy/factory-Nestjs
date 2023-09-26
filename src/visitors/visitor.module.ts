import { Module } from "@nestjs/common";
import { VisitorController } from "./visitor.controller";
import { VisitorService } from "./visitor.service";
import { MongooseModule } from "@nestjs/mongoose";
import { VisitorClass, VisitorSchema } from "./visitor.schema";
@Module({
    imports:[MongooseModule.forFeature([{name: VisitorClass.name,schema: VisitorSchema}])],
    controllers:[VisitorController],
    providers:[VisitorService]
})
export class VisitorModule{}