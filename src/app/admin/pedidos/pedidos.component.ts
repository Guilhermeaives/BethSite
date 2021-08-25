import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  titlePage = 'Página de Pedidos';

  pedidosAdmin = [];
  
  viwControl: boolean;
  pedidoId: string = '';
  
  constructor(
    private pedidosDb: PedidosService
  ) { }

  ngOnInit(): void {
    this.pedidosDb.getAllPedido().subscribe(carrinho => {
      
      this.pedidosAdmin = carrinho 
    
    });
  }

  view(id){
    this.viwControl = !this.viwControl
    this.pedidoId = id
  }

  excluir(id){
    this.pedidosDb.delPedidos(id)
  }

}
