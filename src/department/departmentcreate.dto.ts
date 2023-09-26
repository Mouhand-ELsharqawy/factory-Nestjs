import { IsString } from 'class-validator';
export class CreateDepartmentDTO{
    @IsString()
    readonly name:string;
}