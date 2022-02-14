import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando: boolean = false;

  constructor(private heroesServ: HeroesService) { }

  ngOnInit(): void {

    this.cargando=true;
  
    this.heroesServ.getheroes()
        .subscribe(resp => {
          this.heroes = resp;
          this.cargando = false;
        })

  }

  borrarHeroe(heroe: HeroeModel, i:number){

    Swal.fire({
      title: 'Estás seguro payo?',
      text: `Estás seguro que quieres borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton:true,
      showCancelButton: true
    }).then(resp =>{
      if(resp.value){
        this.heroes.splice(i,1);
        this.heroesServ.borrarHeroe(heroe.id).subscribe();
      }
    })

    

  }

}
