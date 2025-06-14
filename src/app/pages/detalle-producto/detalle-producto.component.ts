import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGEPREURL } from '../../data/data';
import { GetProductsService } from '../../core/services/get-products.service';
import { Product } from '../../../models/models';
import { CommonModule } from '@angular/common';
//import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { ItemsCarouselComponent } from '../../shared/items-carousel/items-carousel.component';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, ItemsCarouselComponent, ButtonComponent],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {

  public categoryName = '';

  public productSelectedData: Product =  {
    type: '',
    name: '',
    slug: '',
    description: '',
    material: '',
    images: [],
    design: '', 
  installation: '',
  application: ''
  }
  public mainImageIndex = 0
  public productDetailsIndex = 0
  public imagePrefix: string = IMAGEPREURL

constructor(private route: ActivatedRoute, private getProductsService: GetProductsService, 
  //private seoService:SeoService
  ) {}


public ngOnInit() {

   this.route.paramMap.subscribe(params => {
    const categorySlug = params.get('category') ?? '';
    this.getProductsService.getCategoryBySlug(categorySlug).subscribe((category) =>  this.categoryName = category.name); 
    const productSlug = params.get('product') ?? '';
    console.log(productSlug)
    this.getProductsService.getProductBySlug(productSlug).subscribe((product) =>  {
      this.productSelectedData = product;
      
     const title =  `${this.productSelectedData.name} · Rótulos Learoy.`
        const description = `${this.productSelectedData.description} Infórmate.`
    const image = this.imagePrefix+this.productSelectedData.images[0]
  const route =`/${categorySlug}/${productSlug}`
        // this.seoService.updateSeoDynamicTags(title, description, image, route)
  
  }); 
})
}

public updateProductDetails(index: number) {
  this.mainImageIndex = index
}

}
