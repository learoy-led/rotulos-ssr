import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ContactBannerComponent } from '../../shared/contact-banner/contact-banner.component';
import { CardsComponent } from '../../shared/cards/cards.component';
import { TextsSectionComponent } from '../../shared/texts-section/texts-section.component';
import { CommonModule } from '@angular/common';
import { ItemsCarouselComponent } from '../../shared/items-carousel/items-carousel.component';
import { AnimatedVerticalCarouselComponent } from '../../shared/animated-vertical-carousel/animated-vertical-carousel.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../models/models.';
import { GetProductsService } from '../../core/services/get-products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactBannerComponent,
    CardsComponent,
    TextsSectionComponent,
    HomeCarouselComponent,
    ItemsCarouselComponent,
    CommonModule,
    AnimatedVerticalCarouselComponent,
    ButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public categories$?: Observable<Category[]>;
  public isMobile: boolean = false;
  public screenSub: Subscription = new Subscription();
  

  constructor(
    //private screenService: ScreenService,
    private getProductsService: GetProductsService,
  ) {}

  public ngOnInit() {
  
    //const pageKeywords:string = 'rótulos luminosos, carteles personalizados, rotulación profesional, proveedor de rotulación';
    
    // this.screenSub = this.screenService
    //   .getMobileSize()
    //   .subscribe((isMobile) => (this.isMobile = isMobile));
    this.categories$ = this.getProductsService.getCategories();
  }

  // public ngOnDestroy() {
  //   this.screenSub.unsubscribe();
  // }
}
