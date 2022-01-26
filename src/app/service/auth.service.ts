import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioCredenciais } from '../model/UsuarioCredenciais';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioCredenciais> {
    return this.http.put<UsuarioCredenciais>('https://app-genducation.herokuapp.com/Genducation/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://app-genducation.herokuapp.com/Genducation/usuarios/cadastrar', usuario)
  }
}