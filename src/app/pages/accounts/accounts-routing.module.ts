import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { Account } from '../../class/account';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [{
    path: '',
    component: AccountsComponent,
    children: [
        {
            path: 'sales',
            component: SalesComponent
        }
    ]

}]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AccountsRoutingModule{

}

export const routedComponents=[
    AccountsComponent,
    SalesComponent
]