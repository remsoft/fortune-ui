import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AccountingComponent } from './accounting/accounting.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'accounting',
      loadChildren:'./accounting/accounting.module#AccountingModule'
    },
    {
      path:'maintenance',
      loadChildren:'./maintenance/maintenance.module#MaintenanceModule'
    },
    {
      path: '',
      redirectTo: 'maintenance',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
