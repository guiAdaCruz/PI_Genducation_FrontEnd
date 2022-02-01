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
    return this.http.get<Postagem[]>('https://app-genducation.herokuapp.com/Genducation/postagens', this.token)
  }

  getPostagemByTitulo(titulo: string): Observable<Postagem>{
    return this.http.get<Postagem>(`https://app-genducation.herokuapp.com/Genducation/postagens/titulo/${titulo}`, this.token)
  }

  getByPostagem(postagem: string): Observable<Postagem>{
    return this.http.get<Postagem>(`https://app-genducation.herokuapp.com/Genducation/postagens/postagem/${postagem}`, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://app-genducation.herokuapp.com/Genducation/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://app-genducation.herokuapp.com/Genducation/postagens/save', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://app-genducation.herokuapp.com/Genducation/postagens/update', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://app-genducation.herokuapp.com/Genducation/postagens/${id}`, this.token)
  }
}
