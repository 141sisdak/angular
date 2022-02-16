import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['event'])
  onScroll(){
    
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    if(pos>max){

      if(this.pelisServ.cargando){return;}

      this.pelisServ.getCartelera().subscribe(movies =>{
        this.movies.push(...movies);
      })
      
    }
  }

  constructor(private pelisServ: PeliculasService) { } 

  ngOnInit(): void {

    this.pelisServ.getCartelera().subscribe(
      movies =>{
        this.movies = movies;
        this.moviesSlideshow = movies;
      }
    );
  }

  ngOnDestroy(): void {
    this.pelisServ.resetCarteleraPage();
  }

}
