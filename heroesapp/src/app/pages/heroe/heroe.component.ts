import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
 
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroeServ: HeroesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id= this.route.snapshot.paramMap.get('id')!;

    if(id !== 'nuevo'){
      this.heroeServ.getHeroe(id)
          .subscribe((resp: any) =>{
            this.heroe = resp;
            this.heroe.id = id;
          })
    }

  }

  guardar(form: NgForm){

    if(form.invalid){
      console.log('Formulario invalido');
      return;
    }
 
    Swal.fire({
      title: 'Espera',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if(this.heroe.id){

      peticion = this.heroeServ.actualizarHeroe(this.heroe);
                 
    }else{

      peticion = this.heroeServ.crearHeroe(this.heroe);

    }

    peticion.subscribe(resp =>{

      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });

    });

    //console.log(form);
    // console.log(this.heroe);

    

  }

}
