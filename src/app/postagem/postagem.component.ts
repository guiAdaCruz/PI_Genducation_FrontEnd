import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
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
  imagem : boolean
  escolaridade: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  subtema: string

  usuario: Usuario = new Usuario()
  idUser = environment.email
  nome = environment.nomeCompleto
  listaMinhasPostagens: Postagem[] 

  key = 'date'
  reverse = true
 
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private temaService: TemaService,
    private alertas: AlertasService
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
    if(this.postagem.urlImg == null){
      this.postagem.urlImg = 'https://badentintas.com.br/images/paginas/1631642635.jpeg'
    }

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem.usuario = this.usuario
      this.postagem = new Postagem()
      this.findByIdUser()
      this.getAllPostagens()
      
    }, erro =>{
      if(this.postagem.titulo.length < 5){
        this.alertas.showAlertDanger('Título da postagem deve ter mais de 5 caracteres.')
      }
      if(this.postagem.postagem.length < 10){
          this.alertas.showAlertDanger('Postagem deve ter mais de 10 caracteres.')
        }
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

  findPostagemByEscolaridade(){
    if(this.escolaridade == ''){
      this.getAllPostagens()
    } else {
      this.postagemService.getPostagemByEscolaridade(this.escolaridade).subscribe((resp : Postagem[]) =>{
        this.listaPostagens = resp
      })
    }
  }

  findPostagemBySubtema(){
    if(this.subtema == ''){
      this.getAllPostagens()
    } else {
      this.postagemService.getPostagemBySubtema(this.subtema).subscribe((resp : Postagem[]) =>{
        this.listaPostagens = resp
      })
    }
  }



}


