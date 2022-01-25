import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',  
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe:any = {};
 @Input() index:any=0;

 @Output() heroeSeleccionado:EventEmitter<number>//Es tipo number por INDEX lo es

  constructor(private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verFichaHeroeEmitter(){
    
    //this.router.navigate(['/heroe-ficha', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
