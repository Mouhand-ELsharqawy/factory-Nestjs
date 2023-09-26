import { PartialType } from "@nestjs/mapped-types";
import { CreateCustomerDTO } from "./customercreate.dto";
export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO){}