import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from "./menu/menu.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { ContatoComponent } from "./contato/contato.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemComponent } from './postagem/postagem.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { OrderModule } from 'ngx-order-pipe';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarComponent,
    ContatoComponent,
    EntrarComponent,
    RodapeComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    HomeComponent,
    UserEditComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
