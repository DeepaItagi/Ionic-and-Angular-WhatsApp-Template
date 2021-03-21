import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchcontactPageRoutingModule } from './searchcontact-routing.module';

import { SearchcontactPage } from './searchcontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchcontactPageRoutingModule
  ],
  declarations: [SearchcontactPage]
})
export class SearchcontactPageModule {}
