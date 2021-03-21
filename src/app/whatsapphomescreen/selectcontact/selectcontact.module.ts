import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectcontactPageRoutingModule } from './selectcontact-routing.module';

import { SelectcontactPage } from './selectcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectcontactPageRoutingModule
  ],
  declarations: [SelectcontactPage]
})
export class SelectcontactPageModule {}
