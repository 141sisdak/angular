import { Component, Input} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',  
})
export class SearchComponent{

  artistas:any[]=[];

  loading:boolean=false;

  constructor(private spotiServ:SpotifyService) { }

 
  buscar(termino:string){
    this.spotiServ.getArtistas(termino)
        .subscribe(respuesta=>{
          console.log(respuesta);
          this.artistas = respuesta;
          this.loading = false
        })
    
  }

}



