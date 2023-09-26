import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateMachineDTO } from "./machinecreate.dto";
export class UpdateMachineDTO extends PartialType(CreateMachineDTO){}