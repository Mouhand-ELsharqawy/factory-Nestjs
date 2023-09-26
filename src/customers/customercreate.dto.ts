import { IsString } from "class-validator";
export class CreateCustomerDTO{
    @IsString()
    readonly firstname:string;
    @IsString()
    readonly meduimname:string;
    @IsString()
    readonly lastname:string;
    @IsString()
    readonly email:string;
    @IsString()
    readonly phone:string;
    @IsString()
    readonly position:string;
}