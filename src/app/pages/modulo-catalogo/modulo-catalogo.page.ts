import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-catalogo',
  templateUrl: './modulo-catalogo.page.html',
  styleUrls: ['./modulo-catalogo.page.scss'],
})
export class ModuloCatalogoPage implements OnInit {

  //Variable Estado login
isAuthenticated = new BehaviorSubject(false);
  constructor(private router: Router) {}

  ngOnInit() {
  }
  /* logout(){
    this.isAuthenticated.next(false);
    this.router.navigate(['/iniciar-sesion']);
  } */

}
