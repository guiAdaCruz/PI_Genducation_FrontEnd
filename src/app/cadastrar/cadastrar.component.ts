import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioCredenciais } from '../model/UsuarioCredenciais';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  usuarioCredenciais: UsuarioCredenciais = new UsuarioCredenciais();

  usuario: Usuario = new Usuario();
  confirmSenha: string;
  tipoUsuario: string;
 

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  cadastrar() {
    
    if (this.usuario.senha != this.confirmSenha) {
      this.alertas.showAlertDanger('As senhas estão incorretas.');
    } else {
      if(this.usuario.foto == ''){
        this.usuario.foto = 'https://i.imgur.com/Q0Ydqzv.png'
      }
        this.usuario.tipo = 'estudante'
        this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;    
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
      }, erro => {
        if(this.authService.getByIdUser(this.usuario.email)){
          this.alertas.showAlertDanger ('Email não pode ser usado, pois já está cadastrado.')
        }
      });
    }
  }
}
