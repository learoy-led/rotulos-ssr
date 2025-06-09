import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { letterImage } from '../../../models/models';
import { letterImages } from '../../data/data';

@Component({
  selector: 'app-animated-vertical-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-vertical-carousel.component.html',
  styleUrl: './animated-vertical-carousel.component.css'
})
export class AnimatedVerticalCarouselComponent {

  public letterImages: letterImage[] = letterImages

public letterImagesLeft: letterImage[] = this.letterImages.slice(0,7)
public letterImagesMiddle: letterImage[] = this.letterImages.slice(7,14)
public letterImagesRight: letterImage[] = this.letterImages.slice(14,21)

}
