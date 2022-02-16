import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetailsResponse } from '../../interfaces/movie-details-response';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/casting-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  
})
export class PeliculaComponent implements OnInit {

  public pelicula!: MovieDetailsResponse;
  public cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute, private peliculasServ: PeliculasService, private location: Location, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    combineLatest([

      this.peliculasServ.getPeliculaDetalle(id),
      this.peliculasServ.getCasting(id)

    ]).subscribe(([pelicula, cast]) => {
      
      if(!pelicula){
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = pelicula;
      this.cast = cast!.filter(actor=> actor.profile_path !== null);
    });

    
    // this.peliculasServ.getPeliculaDetalle(id).subscribe((movie: any) =>{      
    //   this.pelicula = movie;
    // });
    // this.peliculasServ.getCasting(id).subscribe(cast =>{
    //   this.cast = cast!.filter(actor=> actor.profile_path !== null);
    // }
      
    // )

  }

  onVolver(){
    this.location.back();
  }

  

}
