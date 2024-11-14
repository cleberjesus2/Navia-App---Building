import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userName: string = '';
  userEmail: string = '';

  constructor(
    private storage: Storage,
    private serviceProvider: ServiceProviderService
  ) {}

  async ionViewWillEnter() {
    await this.storage.create();
    const user_id = await this.storage.get('user_id');
    console.log('User ID recuperado:', user_id);

    if (user_id) {
      this.serviceProvider.getUserProfile(user_id).subscribe(
        (response: any) => {
          if (response.status === 'sucesso') {
            this.userName = response.userName;
            this.userEmail = response.userEmail;
          } else {
            alert('Erro ao carregar dados do perfil');
          }
        },
        (error: any) => {
          console.error('Erro ao carregar perfil', error);
          alert('Erro na requisição do perfil');
        }
      );
    } else {
      console.log('user_id não encontrado no Storage');
    }
  }
}
