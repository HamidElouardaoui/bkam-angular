import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel-component/carousel-component";

@Component({
  selector: 'app-home-page',
  imports: [CarouselComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
