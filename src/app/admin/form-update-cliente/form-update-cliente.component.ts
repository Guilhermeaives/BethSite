import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedidos';

import { PedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-form-update-cliente',
  templateUrl: './form-update-cliente.component.html',
  styleUrls: ['./form-update-cliente.component.css']
})
export class FormUpdateClienteComponent implements OnInit {
  produtos = [];
  idRouter = null;
  pedido: Pedido = {}

  constructor( 
    private pedidoService: PedidosService,
    private acRouter: ActivatedRoute,    
   
    ) { }

  ngOnInit(): void {
    this.pedidoService.getAllPedido().subscribe(carrinho => this.produtos = carrinho);

    this.idRouter = this.acRouter.snapshot.params['id'];
   
    if(this.idRouter) {
      this.pedidoService.getPedido(this.idRouter).subscribe(result => {
       this.pedido = result
       this.produtos = result.pedidos
      } );     
    };
  }

  update(pedido) {
    try {
      this.pedidoService.upPedidos(this.idRouter,pedido.value)
    } catch (error) {
      console.log(error)
    }
  }

}
