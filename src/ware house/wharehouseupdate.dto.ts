import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateWarehouseDTO } from "./warehousecreate.dto";
export class UpdateWarehouseDTO extends PartialType(CreateWarehouseDTO){}