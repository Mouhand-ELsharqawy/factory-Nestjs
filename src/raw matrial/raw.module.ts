import { Module } from "@nestjs/common"; 
import { RawController } from "./raw.controller";
import { RawService } from "./raw.service";
import { MongooseModule } from "@nestjs/mongoose";
import { RawClass,RawSchema } from "./raw.schema";
@Module({
    imports: [MongooseModule.forFeature([{name:RawClass.name, schema: RawSchema}])],
    controllers:[RawController],
    providers:[RawService]
})
export class RawModule{}