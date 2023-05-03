import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  empresa = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]')]),
    nom_empresa : new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl ('',([Validators.required,Validators.email])),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
    direccion: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  data: any[] = [
    {

    }

  ]

  
  insDatos(){
    this.data = [
      {
        rut: this.empresa.controls.rut.value,
        nom_empresa: this.empresa.controls.nom_empresa.value,
        contrasena: this.empresa.controls.contrasena.value,
        telefono: this.empresa.controls.telefono.value,
        correo: this.empresa.controls.correo.value,
        direccion: this.empresa.controls.direccion.value,
      }
  
    ]

    console.log(this.data)
    this.http.post("http://localhost:3000/auth/signupemp", this.data[0])
    .subscribe(data => {
      console.log('CORRECTO');
     }, error => {
      console.log(error);
    });
    
    

  }

}
