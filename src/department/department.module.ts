import { Module } from "@nestjs/common";
import { DepartmentController } from "./department.controller";
import { DepartmentService } from "./department.service";
import { MongooseModule } from "@nestjs/mongoose";
import { DepartmentClass, DepartmentSchema } from "./department.schema";
@Module({
    imports:[MongooseModule.forFeature([{name: DepartmentClass.name, schema: DepartmentSchema}])],
    controllers:[DepartmentController],
    providers:[DepartmentService]
})
export class DepartmentModule{}