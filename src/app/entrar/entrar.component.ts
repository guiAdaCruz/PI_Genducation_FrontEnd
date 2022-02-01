import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioCredenciais } from '../model/UsuarioCredenciais';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  usuarioCredenciais: UsuarioCredenciais = new UsuarioCredenciais()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioCredenciais) => {
      this.usuarioCredenciais = resp

      environment.nomeCompleto = this.usuarioCredenciais.nomeCompleto
      environment.email = this.usuarioCredenciais.email
      environment.tipo = this.usuarioCredenciais.tipo
      environment.token = this.usuarioCredenciais.token

      this.router.navigate(['/postagem'])
    }, erro => {
      if (erro.status == 400 || erro.status == 401 || erro.status == 500) {
        alert('Usuário ou senha estão incorretos')
      }
    })
  }
}
