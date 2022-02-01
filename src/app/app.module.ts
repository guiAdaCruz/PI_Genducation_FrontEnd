import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MenuComponent } from "./menu/menu.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { ContatoComponent } from "./contato/contato.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { FormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
<<<<<<< HEAD
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
=======
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
>>>>>>> fdc986453cffe4eb939774eb6cdd22b279c1cb3c

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
<<<<<<< HEAD
    PostagemEditComponent,
    PostagemDeleteComponent
=======
    TemaEditComponent,
    TemaDeleteComponent
>>>>>>> fdc986453cffe4eb939774eb6cdd22b279c1cb3c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
