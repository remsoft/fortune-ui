import {NgModule} from '@angular/core';
import {MaintenanceRoutingModule,routedComponents} from './maintenance-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import {CustomerSupplier} from '../../class/supplier_customer';
import { SupplierService } from '../../service/supplier';

@NgModule({
    imports:[MaintenanceRoutingModule,ThemeModule],
    declarations:[...routedComponents],
    providers: [SupplierService],
})
export class MaintenanceModule{
    suppCust: CustomerSupplier;


    onSubmit(){
        
    }
}