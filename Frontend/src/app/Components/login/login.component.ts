import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//Esto es la clase que se necesita para navegar entre páginas
import { Router } from '@angular/router';
import { UsuariosService } from '../../Services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public usuario: any = {
    email: "",
    password: ""
  }
  usuarioJson: any;
  renderUsuario: any;
	public validarLogin:boolean = true;
	public mensajeLogin:any;

  constructor(private usuariosService: UsuariosService, private router:Router) { }

  ngOnInit(): void {

  }

  login(form: any){
    console.log("f ", this.usuario);
    this.usuariosService.login(this.usuario)
    .subscribe((res: any) => {

      console.log(res);
      this.usuarioJson = res;
      console.log(this.usuarioJson);

      if(this.usuarioJson["clave"] == "autorizado"){
        this.router.navigate(['/inicio/contenido']);
				localStorage.setItem('auth_token', this.usuarioJson["access_token"]);
      }else{
        this.mensajeLogin = this.usuarioJson.message;
				this.validarLogin = false;
      }


    })
  }
}
