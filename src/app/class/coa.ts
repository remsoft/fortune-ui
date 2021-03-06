import { DropDownModel } from "./drop_down";
import { Model } from "./model";

export class Coa extends Model{
    l1AccountType:number;
    l2Branch:number;
    l3CustSupp:number;
    l4Division:number;
    l5Custom:number;
    tax:number;
    coaCd:string;
    favorite:string;
    l1AccountTypName:string;
    l1AccountTypGrp:string
    taxes: DropDownModel[];
    accountTypes: DropDownModel[];
    branches: DropDownModel[];
    custSupps: DropDownModel[];
    divisions: DropDownModel[];
    customFields1: DropDownModel[];
}