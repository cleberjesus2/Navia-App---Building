import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

  // Objeto para armazenar os dados do formulário
  registerData = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  // Função de cadastro
  register() {
    // Verifique se as senhas coincidem
    if (this.registerData.senha !== this.registerData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Enviar os dados para o backend
    this.http.post('http://localhost/app/register.php', this.registerData, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      (response) => {
        console.log('Usuário cadastrado:', response);
        alert('Cadastro realizado com sucesso!');
        this.navCtrl.navigateForward('/login');  // Redireciona para a página de login após o sucesso
      },
      (error) => {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar, tente novamente!');
      }
    );
  }
}
