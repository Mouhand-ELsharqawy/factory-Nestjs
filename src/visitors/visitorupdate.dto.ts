import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateVisitorDTO } from "./visitorcreate.dto";
export class UpdateVisitorDTO extends PartialType(CreateVisitorDTO){}