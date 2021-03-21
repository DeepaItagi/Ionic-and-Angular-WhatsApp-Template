import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomescreenpopoverPage } from './homescreenpopover.page';

const routes: Routes = [
  {
    path: '',
    component: HomescreenpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomescreenpopoverPageRoutingModule {}
