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
import { LoginGuard } from '../guards/login.guard';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [

  {path: '', component: SiginComponent, canActivate: [LoginGuard]},

  {
    path: 'admin', component: PanelcontrolComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'cliente', component: ClientesComponent, canActivate: [AuthGuard]
      },
      {
        path: 'produtoadmin', component: ProdutosComponent, canActivate: [AuthGuard]
      },
      {
        path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard]
      },
      {
        path: 'form', component: FormUploadComponent, canActivate: [AuthGuard]
      },
      {
        path: 'form-update/:id', component: FormUpdateComponent, canActivate: [AuthGuard]
      },
      {
        path: 'form-update-cliente/:id', component: FormUpdateClienteComponent, canActivate: [AuthGuard]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
