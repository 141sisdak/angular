import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/casting-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit {

  @Input() cast!: Cast[];

  mySwiper2!: Swiper;

  constructor() { }
  ngAfterViewInit(): void {

    this.mySwiper2 = new Swiper('.swiper', {
      
      slidesPerView:5.3,
      freeMode: true,
      spaceBetween: 15
     
    });
  }

  ngOnInit(): void {

    console.log(this.cast)
  }

  onSlidePrev2(){
    

    this.mySwiper2.slidePrev();

  }

  onSlideNext2(){

    this.mySwiper2.slideNext();
    console.log('gadsfgsd');

  }

}
