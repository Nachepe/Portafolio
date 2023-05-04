import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modulo-empresa',
  templateUrl: './modulo-empresa.page.html',
  styleUrls: ['./modulo-empresa.page.scss'],
})

export class ModuloEmpresaPage implements OnInit {
  logeado:any=[];
  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.logeado= this.router.getCurrentNavigation()?.extras.state
    this.logeado = this.logeado.logeado

    console.log(this.logeado)
  }

}
