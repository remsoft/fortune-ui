import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BillsComponent } from './purchases/bills/bills.component';
import { ReceiptsComponent } from './purchases/receipts/receipts.component';
import { VendorsComponent } from './purchases/vendors/vendors.component';
import { ProdserviceComponent } from './purchases/prodservice/prodservice.component';
import { EstimatesComponent } from './sales/estimates/estimates.component';
import { InvoicesComponent } from './sales/invoices/invoices.component';
import { RecurringInvoiceComponent } from './sales/recurring-invoice/recurring-invoice.component';
import { CuststatementsComponent } from './sales/custstatements/custstatements.component';
import { CustomersComponent } from './sales/customers/customers.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    BillsComponent,
    ReceiptsComponent,
    VendorsComponent,
    ProdserviceComponent,
    EstimatesComponent,
    InvoicesComponent,
    RecurringInvoiceComponent,
    CuststatementsComponent,
    CustomersComponent
  ],
})
export class PagesModule {
}
