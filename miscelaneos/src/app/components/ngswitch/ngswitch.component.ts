import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styles: [
  ]
})
export class NgswitchComponent implements OnInit {

  alerta:string = 'warning';

  constructor() { }

  ngOnInit(): void {
  }

}
