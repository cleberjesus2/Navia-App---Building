import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrePage } from './entre.page';

const routes: Routes = [
  {
    path: '',
    component: EntrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrePageRoutingModule {}
