import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrePageRoutingModule } from './entre-routing.module';

import { EntrePage } from './entre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrePageRoutingModule
  ],
  declarations: [EntrePage]
})
export class EntrePageModule {}
