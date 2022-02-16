import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieDetailsResponse } from '../interfaces/movie-details-response';
import { CastingResponse } from '../interfaces/casting-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url: string = 'https://api.themoviedb.org/3';
  private carteleraPage: number = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {

   }

  get params(){
    return {
      api_key: '71ece6d6aa5a557be9c8174113fccc96',
      language: 'es-ES',
      page: this.carteleraPage
    }
  }

   getCartelera(): Observable<Movie[]>{

    if(this.cargando){
      return of([])
    }
    
    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.url}/movie/now_playing`, {
      params: this.params
    }
    ).pipe(
      map((resp)=> resp.results),
      tap( () => {
        this.carteleraPage +=1;
        this.cargando = false;
      })
    )
      
   }

   buscarPeliculas(texto: string): Observable<Movie[]>{

    const params = {...this.params, page:'1', query: texto}
    
    return this.http.get<CarteleraResponse>(`${this.url}/search/movie` , {
      params
    }).pipe(
      map(
        resp => resp.results
      )
    )

   }

   resetCarteleraPage(){
     this.carteleraPage = 1;
   }

   getPeliculaDetalle(id: string){

    return this.http.get<MovieDetailsResponse>(`${this.url}/movie/${id}`,{params: this.params})
              .pipe(
                catchError(err => of(null))
              )

   }

   getCasting(id: string){

    return this.http.get<CastingResponse>(`${this.url}/movie/${id}/credits`,{params: this.params})
              .pipe(
                
                map((resp:CastingResponse)=>{
                  return resp.cast
                }),
                catchError(err => of(null))
              )

   }
}
