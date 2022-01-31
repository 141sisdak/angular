import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',  
})
export class ArtistaComponent{

  artista:any ={}
  loading:boolean=true;
  topTracks:any = {};

  constructor(private router:ActivatedRoute, private spotiServe:SpotifyService) { 

    this.router.params.subscribe(params=>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })

  }

  getArtista(id:string){
    this.spotiServe.getArtista(id)
        .subscribe(artista=>{
          console.log(artista);
          this.artista = artista;
          this.loading=false;
        })
  }

  getTopTracks(id:string){
    this.spotiServe.getTopTracks(id)
        .subscribe(topTracks=>{
          console.log(topTracks);
          this.topTracks = topTracks;
        })
  }

 

}
