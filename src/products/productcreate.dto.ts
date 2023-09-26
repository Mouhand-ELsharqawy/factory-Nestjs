import { IsString,IsNumber } from "class-validator";

export class CreateProductDTO{
    @IsString()
    readonly name:string;
    @IsNumber()
    readonly quantity:number;
    @IsNumber()
    readonly price:number;
    @IsString()
    readonly description:string;
    @IsString()
    readonly expirationdate:string;
} 