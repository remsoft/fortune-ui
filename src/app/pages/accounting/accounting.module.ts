import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {AccountingRoutingModule,routedComponents} from './accounting-routing.module';

@NgModule({
    imports:[ThemeModule, AccountingRoutingModule],
    declarations: [...routedComponents]
})
export class AccountingModule{}