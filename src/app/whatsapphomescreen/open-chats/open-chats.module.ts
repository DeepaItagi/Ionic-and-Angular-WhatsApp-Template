import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenChatsPageRoutingModule } from './open-chats-routing.module';

import { OpenChatsPage } from './open-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenChatsPageRoutingModule
  ],
  declarations: [OpenChatsPage]
})
export class OpenChatsPageModule {}
