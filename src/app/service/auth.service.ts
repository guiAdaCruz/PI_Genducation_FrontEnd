import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

  /*
    https://localhost:8080/Genducation/usuarios/logar
    https://localhost:8080/Genducation/usuarios/cadastrar
  */

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioCredenciais> {
    return this.http.put<UsuarioCredenciais>('https://app-genducation.herokuapp.com/Genducation/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://app-genducation.herokuapp.com/Genducation/usuarios/cadastrar', usuario)
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://app-genducation.herokuapp.com/Genducation/usuarios/atualizar', usuario)
  }

  getByIdUser(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(`https://app-genducation.herokuapp.com/Genducation/usuarios/${id}`)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }
}