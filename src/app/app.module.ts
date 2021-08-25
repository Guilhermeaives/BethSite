import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';


import { ContatosComponent } from './pages/contatos/contatos.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { environment } from 'src/environments/environment';

import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderadminComponent } from './admin/headeradmin/headeradmin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormComponent,    
    ContatosComponent,
    FotosComponent,
    FooterComponent,   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AdminModule,    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
