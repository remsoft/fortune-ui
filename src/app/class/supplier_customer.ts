import { CustomerSupplierInterface } from "../interface/supplier_customer";
import { Address } from "./address";

export class CustomerSupplier implements CustomerSupplierInterface {
    id: string;
    name: string;
    phone: string;
    email: string;
    isCustomer:number;
    address:Address;
}