import { IsString } from "class-validator";
export class CreateMachineDTO{
    @IsString()
    readonly name:string;
    @IsString()
    readonly function:string;
}