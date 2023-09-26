import { IsString,IsNumber,IsEmail, IsInt, IsNumberString } from "class-validator";
export class CreateWorkerDTO{
    @IsString()
    readonly firstname:string;
    @IsString()
    readonly meduimname:string;
   @IsString()
    readonly lastname:string;
    @IsString()
    readonly gender:string;
    @IsString()
    readonly birthdate:string;
    @IsString()
    readonly phone:string;
    @IsEmail()
    readonly email:string;
    @IsString()
    readonly ssn:string;
    @IsNumberString()
    readonly salary:number;
    @IsString()
    readonly address:string;
   @IsString()
    readonly position:string;
}