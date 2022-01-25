import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {HeroesService} from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeFichaComponent } from './components/heroe-ficha/heroe-ficha.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    HomeComponent, 
    AboutComponent, 
    HeroesComponent, 
    HeroeFichaComponent, 
    BusquedaComponent, 
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING, //Aqui ponemos la variable constante del arcivho de routing.ts
  ],
  providers: [//Aqui van los servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
