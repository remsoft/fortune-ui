import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SupplierComponent} from './supplier/supplier.component';
import { MaintenanceComponent } from './maintenance.component';

const routes: Routes=[{
    path:'',
    component:MaintenanceComponent,
    children:[
        {
            path:'supplier',
            component:SupplierComponent
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
    SupplierComponent
];