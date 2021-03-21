import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsapphomescreenPage } from './whatsapphomescreen.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsapphomescreenPage
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'open-chats/:id',
    loadChildren: () => import('./open-chats/open-chats.module').then( m => m.OpenChatsPageModule)
  },
  {
    path: 'open-status/:id',
    loadChildren: () => import('./open-status/open-status.module').then( m => m.OpenStatusPageModule)
  },
  {
    path: 'selectcontact',
    children: [
      {
        path: '',
        loadChildren: () => import('./selectcontact/selectcontact.module').then( m => m.SelectcontactPageModule)
      },
      {
        path:'searchcontact',
        loadChildren: () => import('./selectcontact/searchcontact/searchcontact.module').then(m => m.SearchcontactPageModule)
      }
    ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsapphomescreenPageRoutingModule {}
