import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RegisterPage } from './register.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule,
    FormsModule,       // Necessário para o ngModel
    IonicModule,       // Necessário para ion-button e ion-input
    RouterModule.forChild(routes) // Importa RouterModule e define rotas
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adiciona o CUSTOM_ELEMENTS_SCHEMA
})
export class RegisterPageModule {}
