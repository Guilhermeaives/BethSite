import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';

import { PanelcontrolComponent } from './panelcontrol/panelcontrol.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FormUploadComponent } from './form-upload/form-upload.component';

import { SiginComponent } from './login/sigin/sigin.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormUpdateClienteComponent } from './form-update-cliente/form-update-cliente.component';


const routes: Routes = [
  {
    path: '', component: PanelcontrolComponent,
    children: [
      {
        path: 'cliente', component: ClientesComponent
      },
      {
        path: 'produtoadmin', component: ProdutosComponent
      },
      {
        path: 'pedidos', component: PedidosComponent
      },
      {
        path: 'form', component: FormUploadComponent
      },
      {
        path: 'sigin', component: SiginComponent
      },
      {
        path: 'form-update/:id', component: FormUpdateComponent
      },      
      {
        path: 'form-update-cliente/:id', component: FormUpdateClienteComponent
      }, 
      {
        path: '',
        redirectTo: '/admin/produtoadmin',
        pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/produtoadmin',
    pathMatch: 'full'
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
