import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url: string;

  constructor(private http: HttpClient) {
     this.url = Ruta.url;
  }

  login(data: any){
    return this.http.post(`${this.url}/api/auth/login`, data, {});
  }

  closeS(){
    return this.http.post(`${this.url}/api/auth/logout`, "", {});
  }

  getUsuarios(){
    return this.http.get(this.url);
  }

}
