import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServiceProviderService } from '../service-provider.service'; 
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nome: string = '';
  telefone: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private navCtrl: NavController, private serviceProvider: ServiceProviderService) {}

  register() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const postData = {
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      senha: this.senha
    };

    this.serviceProvider.register(postData).subscribe(
      response => {
        console.log(response);
        if (response.status === "sucesso") {
          this.navCtrl.navigateRoot('/tabs');
        } else {
          alert(response.mensagem);
        }
      },
      error => {
        console.error('Erro na requisição', error);
        alert('Erro ao registrar usuário');
      }
    );
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
