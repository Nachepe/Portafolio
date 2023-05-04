import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modulo-credencial',
  templateUrl: './modulo-credencial.page.html',
  styleUrls: ['./modulo-credencial.page.scss'],
})
export class ModuloCredencialPage implements OnInit {
logeado:any=[];
  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.logeado= this.router.getCurrentNavigation()?.extras.state
    this.logeado = this.logeado.logeado

    console.log(this.logeado)

  }

}
