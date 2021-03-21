import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenStatusPage } from './open-status.page';

const routes: Routes = [
  {
    path: '',
    component: OpenStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenStatusPageRoutingModule {}
