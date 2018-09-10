import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { SupplierService } from '../../../service/supplier';
import { CustomerSupplierInterface } from '../../../interface/supplier_customer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './supplier_list.component.html',
  styleUrls: ['./supplier_list.component.scss']
})
export class SupplierListComponent implements OnInit {
  listObservable: Observable<CustomerSupplierInterface[]>;
  listCustomerSupplierInterface: CustomerSupplierInterface[];
  ngOnInit() {
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private router:Router,private service: SupplierService) {
    this.listObservable = this.service.getSupplierAll('0');
    this.listObservable.subscribe((listObservable) => {
      this.listCustomerSupplierInterface = listObservable;
      const data = this.listCustomerSupplierInterface;
      this.source.load(data);
      //  this.blockUI.stop();
    })

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onAdd(event): void {
    console.log("Enter Add");
    this.router.navigate(["pages/maintenance/supplier_form"]);    
  }

}
