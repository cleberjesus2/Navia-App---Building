import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any; // Variável para armazenar os detalhes do produto

  // Lista completa de produtos
  products = [
    { id: 1, name: 'Escova de dentes', price: 'R$XX,XX', description: 'Escova de dentes ecológica feita de bambu.' },
    { id: 2, name: 'Kit de cosméticos', price: 'R$XX,XX', description: 'Conjunto de cosméticos orgânicos.' },
    { id: 3, name: 'Garrafa térmica', price: 'R$XX,XX', description: 'Garrafa térmica para bebidas quentes e frias.' },
    { id: 4, name: 'Copos reutilizáveis', price: 'R$XX,XX', description: 'Copos reutilizáveis de material biodegradável.' },
    { id: 5, name: 'Ecobag', price: 'R$XX,XX', description: 'Ecobag reutilizável e sustentável.' },
    { id: 6, name: 'Utensílios de cozinha', price: 'R$XX,XX', description: 'Utensílios feitos com materiais ecológicos.' },
    { id: 7, name: 'Sacola', price: 'R$XX,XX', description: 'Sacola de material reciclado e resistente.' },
    { id: 8, name: 'Oleo', price: 'R$XX,XX', description: 'Óleo natural para cuidados pessoais.' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Captura o 'id' passado como parâmetro na rota
    const productId = Number(this.route.snapshot.queryParams['id']);
    
    // Busca o produto com base no 'id'
    this.product = this.products.find(p => p.id === productId);
  }
}
 