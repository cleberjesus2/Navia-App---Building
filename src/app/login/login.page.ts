import { Component } from '@angular/core';
import { ServiceProviderService } from '../service-provider.service'; // Importar o serviço
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private serviceProvider: ServiceProviderService, private router: Router) { }

  login() {
    this.serviceProvider.login(this.email, this.password).subscribe(
      response => {
        if (response.success) { // Assumindo que o PHP retorna { success: true } em caso de sucesso
          console.log('Login realizado com sucesso:', response);
          this.router.navigate(['/tabs']); // Redireciona para a página principal após o login
        } else {
          alert('Email ou senha incorretos.');
        }
      },
      error => {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login.');
      }
    );
  }
}
