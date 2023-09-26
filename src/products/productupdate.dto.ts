import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateProductDTO } from "./productcreate.dto";
export class UpdateProductDTO extends PartialType(CreateProductDTO){}