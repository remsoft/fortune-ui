import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TransactionComponent} from './transaction/transaction.component';
import { Route } from '@angular/compiler/src/core';
import { AccountingComponent } from './accounting.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes=[{
    path:'',
    component:AccountingComponent,
    children:[{
        path:'transaction',
        component:TransactionComponent
    },{
        path:'reconciliation',
        component:ReconciliationComponent
    },{
        path:'chart',
        component:ChartComponent
    }]
}
];
@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
export class AccountingRoutingModule{
    
}


export const routedComponents = [
   AccountingComponent,
   TransactionComponent,
   ReconciliationComponent, 
   ChartComponent
  ];
  