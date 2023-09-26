import { IsString,IsNumber } from 'class-validator';
export class CreateRawDTO{
    @IsString()
    readonly name: string;
    @IsNumber()
    readonly quantity:number;
    @IsNumber()
    readonly price:number;
    @IsString()
    readonly expirationdate:string;
}