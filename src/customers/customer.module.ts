import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerClass, CutomerSchema } from "./customer.schema";
@Module({
    imports:[MongooseModule.forFeature([{ name:CustomerClass.name, schema: CutomerSchema}])],
    controllers:[CustomerController],
    providers:[CustomerService]
})
export class customerModule{}