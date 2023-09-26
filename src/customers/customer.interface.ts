import { UUID } from "crypto";
export interface Customer{
    id:UUID;
    
    firstname:string;

    meduimname:string;

    lastname:string;

    email:string;

    phone:string;
    
    position:string;
}