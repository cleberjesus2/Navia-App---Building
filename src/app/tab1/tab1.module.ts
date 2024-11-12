import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Certifique-se de que IonicModule está importado aqui
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicione isso
})
export class Tab1PageModule {}
