import { Component} from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {

  heroes:Heroe[] = [];
  termino:string =""

  constructor(private heroeServ:HeroesService, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroeServ.buscarHeroes(params['texto']);
      this.termino = params['texto'];
      
    });

    

   }

  
  

}
