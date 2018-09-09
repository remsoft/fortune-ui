import { Address } from "../class/address";

export interface CustomerSupplierInterface{
    id:number;
    name:string;
    phone:string;
    email:string;
    isCustomer:number;
    address:Address;
}