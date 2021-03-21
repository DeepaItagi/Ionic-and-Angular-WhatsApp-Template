import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenChatsPopoverPage } from './open-chats-popover.page';

const routes: Routes = [
  {
    path: '',
    component: OpenChatsPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenChatsPopoverPageRoutingModule {}
