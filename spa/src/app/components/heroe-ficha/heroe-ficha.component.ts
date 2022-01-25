import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-ficha',
  templateUrl: './heroe-ficha.component.html',  
})
export class HeroeFichaComponent {

  heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute, heroeServ:HeroesService) { 

    this.activatedRoute.params.subscribe(params => {
      this.heroe = heroeServ.getHeroe(params['id']);
     
    });

  }

  
  

}
