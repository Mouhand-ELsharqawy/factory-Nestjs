import { UUID } from "crypto";
export interface Raw{
    id:UUID;

    name: string;
   
    quantity:number;
    
    price:number;
 
    expirationdate:string;
}