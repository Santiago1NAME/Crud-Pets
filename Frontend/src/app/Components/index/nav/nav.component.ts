import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//Esto es la clase que se necesita para navegar entre páginas
import { Router } from '@angular/router';
import { UsuariosService } from '../../../Services/usuarios.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  closeSe(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['']);
  }
}
