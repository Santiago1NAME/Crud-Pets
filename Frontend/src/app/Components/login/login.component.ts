import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public usuario: any = {
    correoL: "",
    contraL: ""
  }
  usuarioJson: any;
  renderUsuario: any;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {

  }

  login(form: any){
    console.log("f ", this.usuario);
    this.usuariosService.getUsuarios()
    .subscribe(res => {
      this.usuarioJson = res;
      this.renderUsuario = this.usuarioJson.find((result: any) => {
        if(result.correo == this.usuario.correoL && result.password == this.usuario.contraL){
          return true;
        }else{
          return false;
        }
      });

      if(this.renderUsuario){
        console.log("entroooo");
      }else{
        console.log("error");
      }

    })
  }
}
