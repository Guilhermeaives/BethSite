import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutosdbService } from '../../services/produtosdb.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titlePage = "Solicite seu Orçamento:";

  form:FormGroup;
  produtos = [];
  id = null;
  header: boolean

  constructor(
    private fb:FormBuilder,
    private pedidosDb: PedidosService,
    private produtoDb: ProdutosdbService,
    private acRouter: ActivatedRoute    
  ) { }


  ngOnInit(): void {
    this.id = this.acRouter.snapshot.params['id'];

    if(this.id == 0){
      this.header = !this.header
    }
    this.produtoDb.getAllProduto().subscribe(carrinho => this.produtos = carrinho);
    this.validaForm();
   
  }
  
  validaForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(3)]],
      celular: ['', [Validators.required, Validators.minLength(3)]],
      pedidos: [''],
      menssagem: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  
  }
  cadastrar(){
    try {
      this.pedidosDb.addPedido(this.form.value);
      this.form.reset();
      console.log(this.form.value)
    } catch (error) {
      console.log(error)      
    }
   
  }
 
}

