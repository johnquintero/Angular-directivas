import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  // templateUrl: './ng-style.component.html',
  template:`
  <span>con un objeto</span>
  <p [ngStyle] = "{'font-size':'60px'}">Hola mundo</p>
  <span> con style.clase (si la clase esta separada po  - no se coloca y lo que se hace es colocar la primera mayuscula ej: style.font-size => style.fontSize ) al final se le puede agregar un valor mas para especifice el tipo de valor si aplica (rem, px, %)</span>
  <p [style.fontSize.px] = "tamano">Hola mundo</p>
  <button class="btn btn-info" (click)="tamano = tamano + 5"><i class="fas fa-plus"></i></button>
  <button class="btn btn-info" (click)="tamano = tamano - 5"><i class="fas fa-minus"></i></button>`,
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamano:number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
