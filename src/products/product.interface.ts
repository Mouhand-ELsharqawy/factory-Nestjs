import { UUID } from "crypto";
export interface Product{
    id:UUID;
    
    name:string;
    
    quantity:number;

    price:number;
   
    description:string;
    
    expirationdate:string;
}