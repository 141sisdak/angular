import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {  

  constructor(private http:HttpClient) { 
  }



  getQuery(query:string){
    
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBGwasnT2X6zRPDBfyGk8B6m5arIw-N4Tj2D0kUVNOfGcuksY57MF4cS3hmIMTBamGXQo6SuFykW0GXcVA'
    });

    return this.http.get(url, {headers});                  
  }

  getNewReleases(){  
     
      return this.getQuery('browse/new-releases?limit=20')
                  .pipe(map((data:any)=>data.albums.items));
  }

  getArtistas(termino:string){
    
    return this.getQuery(`search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`)
                .pipe(map((data:any)=>data.artists.items));

  }

  getArtista(termino:string){    
    return this.getQuery(`artists/${termino}`);
               // .pipe(map((data:any)=>data.artists.items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
              .pipe(map((data:any)=>data.tracks))
  }
   
}
