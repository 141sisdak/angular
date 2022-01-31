import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent {  

  nuevasCanciones:any[] = [];
  loading:boolean=true;

  error:boolean = false;
  mensajeError:string = '';

  constructor(private spotiServ:SpotifyService) { 
   spotiServ.getNewReleases()
             .subscribe((respuesta:any) =>{
                console.log(respuesta);
                this.nuevasCanciones = respuesta;
                this.loading = false;
             }, (errorServicio) =>{
                this.loading = false;
                this.error = true;
                this.mensajeError = errorServicio.error.error.message;
             });
   }


  
 

}
