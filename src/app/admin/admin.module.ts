import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelcontrolComponent } from './panelcontrol/panelcontrol.component';


import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';


import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUploadComponent } from './form-upload/form-upload.component';

import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

import { SiginComponent } from './login/sigin/sigin.component';

import { RegisterComponent } from './login/register/register.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormUpdateClienteComponent } from './form-update-cliente/form-update-cliente.component';

@NgModule({
  declarations: [
    PanelcontrolComponent,   
    PedidosComponent,
    ProdutosComponent,
    ClientesComponent,    
    HeaderadminComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    ListUploadComponent,
    ImageUploadComponent,
    SiginComponent,
    RegisterComponent,
    FormUpdateComponent,
    FormUpdateClienteComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PanelcontrolComponent,
    HeaderadminComponent
  ],

  providers: [],
  bootstrap: [PanelcontrolComponent]

})
export class AdminModule { }
