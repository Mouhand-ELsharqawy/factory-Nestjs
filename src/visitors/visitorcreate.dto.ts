import { IsString } from "class-validator";
export class CreateVisitorDTO{
    @IsString()
    readonly number:number;
}