import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  login = new FormGroup({
    rut: new FormControl('',[Validators.required,Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]')]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
  });

  constructor(private http: HttpClient,private router : Router) { }

  ngOnInit() {
  }


  data: any[] = [
    {

    }

  ]
  datalogin: any []=[];

  
  insDatos(){
    this.data = [
      {
        username: this.login.controls.rut.value,
        password: this.login.controls.contrasena.value,
        
      }
  
    ]
    

    console.log(this.data)
    this.http.post("http://localhost:3000/auth/signin", this.data[0])
    .subscribe((data:any )=> {
      this.datalogin= data
      let navigationExtras: NavigationExtras = {
        state: {
          logeado :this.datalogin
        }
      }


    this.router.navigate(['/modulo-credencial'],navigationExtras) 
      
     }, error => {
      console.log(error);
    });
    
    

  }
}
