import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomescreenpopoverPageRoutingModule } from './homescreenpopover-routing.module';

import { HomescreenpopoverPage } from './homescreenpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomescreenpopoverPageRoutingModule
  ],
  declarations: [HomescreenpopoverPage]
})
export class HomescreenpopoverPageModule {}
