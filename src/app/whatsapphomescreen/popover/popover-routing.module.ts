import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPage } from './popover.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  },
  {
    path: 'homescreenpopover',
    loadChildren: () => import('./homescreenpopover/homescreenpopover.module').then( m => m.HomescreenpopoverPageModule)
  },
  {
    path: 'open-chats-popover',
    loadChildren: () => import('./open-chats-popover/open-chats-popover.module').then( m => m.OpenChatsPopoverPageModule)
  },
  {
    path: 'open-status-popover',
    loadChildren: () => import('./open-status-popover/open-status-popover.module').then( m => m.OpenStatusPopoverPageModule)
  },
  {
    path: 'selectcontact-popover',
    loadChildren: () => import('./selectcontact-popover/selectcontact-popover.module').then( m => m.SelectcontactPopoverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverPageRoutingModule {}
