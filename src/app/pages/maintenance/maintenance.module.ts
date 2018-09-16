import {NgModule} from '@angular/core';
import {MaintenanceRoutingModule,routedComponents} from './maintenance-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import {CustomerSupplier} from '../../class/supplier_customer';
import { SupplierService } from '../../service/supplier';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ModalComponent } from '../shares/modals/modal/modal.component';
import { SharesModule } from '../shares/shares.module';

@NgModule({
    imports:[MaintenanceRoutingModule,ThemeModule,Ng2SmartTableModule,SharesModule], 
    declarations:[...routedComponents],
    providers: [SupplierService,SmartTableService],
    entryComponents: [
        ModalComponent,
      ],
})
export class MaintenanceModule{
    suppCust: CustomerSupplier;


    onSubmit(){
        
    }
}