import { Component, OnInit } from '@angular/core';
import { CustomerSupplier } from '../../../class/supplier_customer';
import { SupplierService } from '../../../service/supplier';
import { Address } from '../../../class/address';
import { Observable } from 'rxjs';
import { CustomerSupplierInterface } from '../../../interface/supplier_customer';

@Component({
  selector: 'supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  model = new CustomerSupplier();
  supplierObservable:Observable<CustomerSupplierInterface>;
  customerSupplierInterface: CustomerSupplierInterface;

  constructor(private supplierService: SupplierService) { }
  ngOnInit() {
    this.model.address = new Address();
   }

  onSubmit() {
    this.model.isCustomer=0;
    this.supplierObservable=this.supplierService.addSupplier(this.model);
    this.supplierObservable.subscribe((supplierObservable) => {
      this.customerSupplierInterface = supplierObservable;
      console.log("WS INVOKED");
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
