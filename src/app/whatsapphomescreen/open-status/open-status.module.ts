import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenStatusPageRoutingModule } from './open-status-routing.module';

import { OpenStatusPage } from './open-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenStatusPageRoutingModule
  ],
  declarations: [OpenStatusPage]
})
export class OpenStatusPageModule {}
