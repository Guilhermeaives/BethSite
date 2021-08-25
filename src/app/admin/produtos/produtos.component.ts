import { Component, OnInit } from '@angular/core';
import { ProdutosdbService } from 'src/app/services/produtosdb.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  titlePage = 'Página de Produtos';

  produtosAdmin = [];

  constructor(
    private produtosDb: ProdutosdbService
  ) { }

  ngOnInit(): void {
    this.produtosDb.getAllProduto().subscribe(carrinho => this.produtosAdmin = carrinho);
  } 
  
  excluir(id){
    this.produtosDb.delProduto(id)
  }
}
