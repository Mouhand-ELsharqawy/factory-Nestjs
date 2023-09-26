import { IsString, } from "class-validator";
export class CreateWarehouseDTO{
    @IsString()
    readonly name:string;
    @IsString()
    readonly size:string;
    @IsString()
    readonly address:string;
}