import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsapphomescreenPageRoutingModule } from './whatsapphomescreen-routing.module';

import { WhatsapphomescreenPage } from './whatsapphomescreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsapphomescreenPageRoutingModule
  ],
  declarations: [WhatsapphomescreenPage]
})
export class WhatsapphomescreenPageModule {}
