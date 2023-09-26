import { UUID } from "crypto";
export interface Machine{
    id:UUID;
    
    name:string;

    function:string;
}