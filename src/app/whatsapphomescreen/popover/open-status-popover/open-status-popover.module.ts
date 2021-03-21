import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenStatusPopoverPageRoutingModule } from './open-status-popover-routing.module';

import { OpenStatusPopoverPage } from './open-status-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenStatusPopoverPageRoutingModule
  ],
  declarations: [OpenStatusPopoverPage]
})
export class OpenStatusPopoverPageModule {}
