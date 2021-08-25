import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './pages/contatos/contatos.component';

import { FormComponent } from './pages/form/form.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'formulario/:id', component: FormComponent
  },
  
  {
    path: 'fotos', component: FotosComponent
  },

  {
    path: 'contatos', component: ContatosComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
