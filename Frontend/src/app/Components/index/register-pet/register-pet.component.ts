import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterPetComponent implements OnInit {

  public url: any;
  public archivos: any = [];
  public pet: any = {
    nameP: "",
    dateP: "",
    descripP: "",
    razaP: "",
    fileP: ""
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  /*Visualización previa de imagen cargada*/
  detectFiles(event: any) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.url = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    }

    this.archivos.push(files);
  }

  saveData(form: any){
    try {
      const formularioDatos = new FormData();
      this.archivos.forEach((archivo: any) => {
        formularioDatos.append('files', archivo);
      });
    } catch (e) {
      console.log('Error ', e);
    }
    console.log(form);
  }

  saveData2(form: any){
    const formularioDatos: FormData = new FormData();
    formularioDatos.append("dsadsa", "dsadsadsa");
    //formularioDatos.append(form.value);
    console.log(formularioDatos);
  }
}
