import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenStatusPopoverPage } from './open-status-popover.page';

const routes: Routes = [
  {
    path: '',
    component: OpenStatusPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenStatusPopoverPageRoutingModule {}
