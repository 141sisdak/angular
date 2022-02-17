import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCicWPtEpwA8UG4n_TEDU-DRlcVjc8BJBE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
