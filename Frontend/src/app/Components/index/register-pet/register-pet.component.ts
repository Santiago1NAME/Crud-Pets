import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterPetComponent implements OnInit {

  public url: any;
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
  }

  saveData(form: any){
    console.log(form);
  }
}
