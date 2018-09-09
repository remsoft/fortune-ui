import {NgModule} from '@angular/core';
import {MaintenanceRoutingModule,routedComponents} from './maintenance-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import {CustomerSupplier} from '../../class/supplier_customer';
import { SupplierService } from '../../service/supplier';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
    imports:[MaintenanceRoutingModule,ThemeModule,Ng2SmartTableModule], 
    declarations:[...routedComponents],
    providers: [SupplierService,SmartTableService],
})
export class MaintenanceModule{
    suppCust: CustomerSupplier;


    onSubmit(){
        
    }
}