import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  sair() {
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nomeCompleto = ''
    environment.email = ''
  }
}
