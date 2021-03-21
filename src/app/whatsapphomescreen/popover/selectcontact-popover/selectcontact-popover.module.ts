import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectcontactPopoverPageRoutingModule } from './selectcontact-popover-routing.module';

import { SelectcontactPopoverPage } from './selectcontact-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectcontactPopoverPageRoutingModule
  ],
  declarations: [SelectcontactPopoverPage]
})
export class SelectcontactPopoverPageModule {}
