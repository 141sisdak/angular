import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   
   <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    
    <p [appResaltado]="'orange'">
        ye bon dia
    </p>
    <app-ngswitch></app-ngswitch>
      `,
  styles: [
  ]
})
export class HomeComponent /*implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy*/ {

  constructor() {
    console.log('Constructor')
   }

  ngOnInit(): void {
    console.log('OnInit');
  }
/**
  OnChanges(){
    console.log('OnChanges');
  } 

  DoCheck(){
    console.log('DoCheck');
  } 

  AfterContentInit(){
    console.log('AfterContentInit');
  } 

  AfterContentChecked (){
    console.log('AfterContentChecked');
  }  

  AfterViewInit(){
    console.log('AfterViewInit');
  } 

  AfterViewChecked (){
    console.log('AfterViewChecked');
  }

  OnDestroy(){
    console.log('OnDestroy');
  }
 */
}
