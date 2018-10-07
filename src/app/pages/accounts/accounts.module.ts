import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { ThemeModule } from '../../@theme/theme.module';
import {AccountsRoutingModule,routedComponents} from './accounts-routing.module';


@NgModule({
  imports: [ 
    CommonModule,AccountsRoutingModule,ThemeModule
  ],
  declarations: [...routedComponents]
})
export class AccountsModule { }
