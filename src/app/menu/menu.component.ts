import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nomeCompleto
  email = environment.email
  id = environment.email

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nomeCompleto = ''
    environment.email = ''
  }

  comparar(){
    let sobre = document.querySelector("#sobre")
    if(sobre == null){
      this.router.navigate(['/inicio'])
    }
  
  }
}
