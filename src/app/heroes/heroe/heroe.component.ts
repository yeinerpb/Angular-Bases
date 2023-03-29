import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number = 45

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obternerNOmbre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre() {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad() {
        this.edad = 35;
    }

}