import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateRawDTO } from "./rawcreate.dto";
export class UpdateRawDTO extends PartialType(CreateRawDTO){}