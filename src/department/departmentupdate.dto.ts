import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateDepartmentDTO } from "./departmentcreate.dto";

export class UpdateDepartmentDTO extends PartialType(CreateDepartmentDTO){}