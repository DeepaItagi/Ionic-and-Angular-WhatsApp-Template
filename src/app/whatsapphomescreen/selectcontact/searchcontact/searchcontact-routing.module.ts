import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchcontactPage } from './searchcontact.page';

const routes: Routes = [
  {
    path: '',
    component: SearchcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchcontactPageRoutingModule {}
