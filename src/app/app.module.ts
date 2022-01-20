import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MenuComponent } from "./menu/menu.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";

import { ContatoComponent } from "./contato/contato.component";

import { EntrarComponent } from "./entrar/entrar.component";
import { RodapeComponent } from "./rodape/rodape.component";

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    CadastrarComponent,

    ContatoComponent,

    EntrarComponent,
    RodapeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
