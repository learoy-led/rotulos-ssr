import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { carouselImages } from '../../../../data/data';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {
  public imageIndex:number = 0
  public carouselImages: string[] = carouselImages
  
    carouselImageChange(index:number) {
      this.imageIndex = index
    }
}
