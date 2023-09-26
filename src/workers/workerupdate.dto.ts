import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateWorkerDTO } from "./workercreate.dto";
export class UpdateWorkerDTO extends PartialType(CreateWorkerDTO){}