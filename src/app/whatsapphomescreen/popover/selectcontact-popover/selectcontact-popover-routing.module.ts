import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectcontactPopoverPage } from './selectcontact-popover.page';

const routes: Routes = [
  {
    path: '',
    component: SelectcontactPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectcontactPopoverPageRoutingModule {}
