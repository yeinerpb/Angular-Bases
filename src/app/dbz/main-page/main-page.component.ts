import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
 
  nuevo: Personaje = {
    nombre: 'Tronks',
    poder: 13000
  }

  constructor () {}
}
