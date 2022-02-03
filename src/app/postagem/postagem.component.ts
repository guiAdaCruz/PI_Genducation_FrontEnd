import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost : string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  usuario: Usuario = new Usuario()
  idUser = environment.email
  nome = environment.nomeCompleto
  listaMinhasPostagens: Postagem[] 
 
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas()
    this.getAllPostagens()
    this.listaMinhasPostagens = this.usuario.postagens

  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
  }

  publicar(){
    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.usuario.email = this.idUser
    this.postagem.usuario = this.usuario


    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem.usuario = this.usuario
      this.postagem = new Postagem()
      this.findByIdUser()
      this.getAllPostagens()
      
    })
  }

  findByTituloPostagem(){
    
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else {
      this.postagemService.getPostagemByTitulo(this.tituloPost).subscribe((resp : Postagem[]) =>{
        this.listaPostagens = resp
      })
    }
    }
    
 

}
