import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  titlePage = 'Página de Clientes';

  clientesAdmin = [];

  constructor(
    private pedidosDb: PedidosService
  ) { }

  ngOnInit(): void {
    this.pedidosDb.getAllPedido().subscribe(carrinho => {
      
      this.clientesAdmin = carrinho 
    
    });
  }

  excluir(id){
    this.pedidosDb.delPedidos(id)
  }


}
