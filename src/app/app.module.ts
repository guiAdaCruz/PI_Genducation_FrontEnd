import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ContatoComponent } from './contato/contato.component';
=======
import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';
>>>>>>> 6fa425d799d16d9928082b9b8d288e2eb738bf05

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContatoComponent
=======
    EntrarComponent,
    RodapeComponent
>>>>>>> 6fa425d799d16d9928082b9b8d288e2eb738bf05
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
