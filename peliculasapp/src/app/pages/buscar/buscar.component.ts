import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  
})
export class BuscarComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private peliculasServ: PeliculasService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: any) =>{
        this.peliculasServ.buscarPeliculas(params.texto).subscribe(movies =>{
         this.movies = movies
        })
      }
    )

  }

}
