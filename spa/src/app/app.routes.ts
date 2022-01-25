import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeFichaComponent  } from './components/heroe-ficha/heroe-ficha.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


export const APP_ROUTES: Routes = [
    
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'heroes', component:HeroesComponent},
    {path: 'heroe-ficha/:id', component:HeroeFichaComponent},// "/: + [id]" es la ruta
    {path: 'busqueda/:texto', component:BusquedaComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}//Esto es para que si no encuentra la ruta lleve a la home en este caso
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);