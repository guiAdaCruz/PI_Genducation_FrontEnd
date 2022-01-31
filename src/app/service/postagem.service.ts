import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/Genducation/postagens', this.token)
  }

  getPostagemByTitulo(titulo: string): Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/Genducation/postagens/titulo/${titulo}`, this.token)
  }

  getByPostagem(postagem: string): Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/Genducation/postagens/postagem/${postagem}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('http://localhost:8080/Genducation/postagens/save', postagem, this.token)
  }
}
