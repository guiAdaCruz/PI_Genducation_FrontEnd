import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
<<<<<<< HEAD
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
=======
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
>>>>>>> fdc986453cffe4eb939774eb6cdd22b279c1cb3c
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
{path: '', redirectTo: 'entrar', pathMatch: 'full'},
{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'contato', component: ContatoComponent},
{path: 'inicio', component: InicioComponent},
{path: 'tema', component: TemaComponent},
<<<<<<< HEAD
{path: 'postagem-edit/:id', component: PostagemEditComponent},
{path: 'postagem-delete/:id', component: PostagemDeleteComponent}
=======
{path: 'tema-edit/:id', component: TemaEditComponent},
{path: 'tema-delete/:id', component: TemaDeleteComponent}
>>>>>>> fdc986453cffe4eb939774eb6cdd22b279c1cb3c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
