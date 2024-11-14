import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',  // Redirecionamento para a tela de login ao acessar a raiz
    pathMatch: 'full',
  },
  {
    path: 'login',  // Rota para a página de login
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',  // Rota para a página de registro
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'tabs',  // Rota para as tabs, a tela principal após o login
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '**',  // Rota de fallback, caso a URL seja inválida
    redirectTo: 'login', 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Carregamento antecipado dos módulos
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
