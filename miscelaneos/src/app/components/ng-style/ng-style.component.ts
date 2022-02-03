import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.font-size.px] = "tamano">Esto es una etiqueta p</p>

    <button class="btn btn-primary me-1" (click)="tamano = tamano + 5"><i class="fa fa-plus"></i></button>
    
    <button class="btn btn-primary" (click)="tamano = tamano - 5"><i class="fa fa-minus"></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
