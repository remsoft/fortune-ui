import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { SupplierListComponent } from './supplier_list/supplier_list.component';

const routes: Routes=[{
    path:'',
    component:MaintenanceComponent,
    children:[
        {
            path:'supplier_list',
            component:SupplierListComponent
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


export class MaintenanceRoutingModule{

}

export const routedComponents=[
    MaintenanceComponent,
    SupplierListComponent
];