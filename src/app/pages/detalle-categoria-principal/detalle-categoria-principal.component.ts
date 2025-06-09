import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/models';
import { IMAGEPREURL } from '../../data/data';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../../core/services/get-products.service';
import { CardsComponent } from '../../shared/cards/cards.component';
import { GenderPipe } from '../../pipes/gender.pipe';
//import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-categoria-principal',
  standalone: true,
  imports: [CardsComponent, GenderPipe, CommonModule],
  templateUrl: './detalle-categoria-principal.component.html',
  styleUrl: './detalle-categoria-principal.component.css'
})
export class DetalleCategoriaPrincipalComponent implements OnInit {

  public categorySelectedData: Category = {
    type: '',
    name: '',
    slug: '',
    products: [],
    description: {
      application: '',
      custom: '',
      cost: '',
      products: ''
    }
  }
  public imagePrefix: string = IMAGEPREURL


constructor(private route: ActivatedRoute, private GetProductsService: GetProductsService, 
  //private seoService:SeoService
  ) {}

public ngOnInit() {

      this.route.paramMap.subscribe(params => {
    const categorySlug = params.get('category') ?? '';
    this.GetProductsService.getCategoryBySlug(categorySlug).subscribe((category)=>  {
      console.log(categorySlug)
      this.categorySelectedData = category

         const title =`${this.categorySelectedData.name} · Rótulos Learoy`
         const description = `${this.categorySelectedData.description.custom} Infórmate.`
          const image = this.imagePrefix+this.categorySelectedData.products[0].images[0]
 
          //this.seoService.updateSeoDynamicTags(title, description, image, categorySlug)
  
  }); 
});
  
  
   
}

}
