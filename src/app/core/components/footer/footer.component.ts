import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ContactDetails } from '../../../../models/models';
import { contactDetails } from '../../../data/data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetProductsService } from '../../services/get-products.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  public contact: ContactDetails = contactDetails;
  public categories$?: Observable<Category[]>;
  public keywords = [
    {
    link: '/rotulos-luminosos/cartel-luminoso-con-metacrilato-incrustado',
    text: 'rótulos publicitarios'
  },
  {
    link: '/rotulos-luminosos/metacrilato-con-contorno-de-aluminio',
    text: 'carteles luminosos llamativos'
  },
  {
    link: '/rotulos-sin-luz/rotulo-aluminio',
    text: 'rótulos para exterior'
  },
  {
    link: '/rotulos-luminosos/letras-y-figuras-de-neon-flexible',
    text: 'carteles neón'
  },
  ]

  constructor( private getProductsService: GetProductsService ){}

  ngOnInit() {
    this.categories$ = this.getProductsService.getCategories();
    console.log('en footer', this.categories$)
  }

}
