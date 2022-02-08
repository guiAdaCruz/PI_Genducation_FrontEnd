import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://app-genducation.herokuapp.com/Genducation/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://app-genducation.herokuapp.com/Genducation/tema/${id}`, this.token)
  }

  getTemaByNome(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://app-genducation.herokuapp.com/Genducation/tema/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://app-genducation.herokuapp.com/Genducation/tema/save', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://app-genducation.herokuapp.com/Genducation/tema/update', tema, this.token)
  }

  deleteTema(idTema: number) {
    return this.http.delete(`https://app-genducation.herokuapp.com/Genducation/tema/${idTema}`, this.token)
  }

}
