import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenChatsPopoverPageRoutingModule } from './open-chats-popover-routing.module';

import { OpenChatsPopoverPage } from './open-chats-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenChatsPopoverPageRoutingModule
  ],
  declarations: [OpenChatsPopoverPage]
})
export class OpenChatsPopoverPageModule {}
