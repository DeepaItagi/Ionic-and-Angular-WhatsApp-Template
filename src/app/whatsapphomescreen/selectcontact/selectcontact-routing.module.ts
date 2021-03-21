import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectcontactPage } from './selectcontact.page';

const routes: Routes = [
  {
    path: '',
    component: SelectcontactPage
  },
  {
    path: 'searchcontact',
    loadChildren: () => import('./searchcontact/searchcontact.module').then( m => m.SearchcontactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectcontactPageRoutingModule {}
