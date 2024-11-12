import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Evento {
  nome: string;
  descricao: string;
  imagem: string;
  data: string;
  endereco: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  eventosColeta: Evento[] = [
    {
      nome: 'Mutirão de Limpeza ',
      descricao: 'Junte-se a nós para limpar as ruas e contribuir com o meio ambiente',
      imagem: 'assets/imagens/eventos/coletas1.jpeg',
      data: '12/11/2024',
      endereco: 'Praia Central',
    },
    {
      nome: 'Coleta de Resíduos Eletrônicos',
      descricao: 'Descarte seus aparelhos eletrônicos de forma correta e ajude o mundo.',
      imagem: 'assets/imagens/eventos/coletas2.jpeg',
      data: '15/11/2024',
      endereco: 'Praça da Sé',
    },
  ];

  eventosReciclagem: Evento[] = [
    {
      nome: 'Oficina de Reciclagem Criativa',
      descricao: 'Aprenda a transformar materiais recicláveis em itens úteis e decorativos!',
      imagem: 'assets/imagens/eventos/reciclagem1.jpeg',
      data: '20/11/2024',
      endereco: 'Parque das Águas',
    },
    {
      nome: 'Dia do Descarte Consciente',
      descricao: 'Traga seus recicláveis e ajude na construção de um futuro sustentável.',
      imagem: 'assets/imagens/eventos/reciclagem2.jpeg',
      data: '22/11/2024',
      endereco: 'Shopping Central',
    },
  ];

  eventosTroca: Evento[] = [
    {
      nome: 'Troque e Reutilize',
      descricao: 'Participe da feira de troca e renove seus produtos de forma sustentável!',
      imagem: 'assets/imagens/eventos/troca1.png',
      data: '25/11/2024',
      endereco: 'Praça Verde',
    },
    {
      nome: 'Escambo Verde',
      descricao: 'Uma troca justa e ecológica para aqueles que se importam com o planeta.',
      imagem: 'assets/imagens/eventos/troca2.png',
      data: '27/11/2024',
      endereco: 'Biblioteca Municipal',
    },
  ];

  eventosPalestras: Evento[] = [
    {
      nome: 'Palestra 1',
      descricao: 'Descrição da palestra 1',
      imagem: 'assets/imagens/eventos/palestra1.jpeg',
      data: '30/11/2024',
      endereco: 'Auditório Central',
    },
    {
      nome: 'Sustentabilidade no Dia a Dia',
      descricao: 'Descubra práticas sustentáveis que você pode aplicar em casa',
      imagem: 'assets/imagens/eventos/palestra2.jpeg',
      data: '02/12/2024',
      endereco: 'Centro de Convenções',
    },
  ];

  eventosFeira: Evento[] = [
    {
      nome: 'Sustentabilidade no Dia a Dia',
      descricao: 'Descubra práticas sustentáveis que você pode aplicar em casa.',
      imagem: 'assets/imagens/eventos/feira1.jpeg',
      data: '05/12/2024',
      endereco: 'Praça Central',
    },
    {
      nome: 'Inovações Ecológicas para o Futuro',
      descricao: 'Conheça as novas tecnologias que estão mudando o mundo da sustentabilidade.',
      imagem: 'assets/imagens/eventos/feira2.jpeg',
      data: '07/12/2024',
      endereco: 'Mercado Municipal',
    },
  ];

  constructor(private navCtrl: NavController) {}

  verEvento(evento: Evento) {
    // Navegar para a página de detalhes do evento
    this.navCtrl.navigateForward(`/evento/${evento.nome}`);
  }
}
