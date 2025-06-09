import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../models/models.';
import { Observable } from 'rxjs';
import { IMAGEPREURL } from '../../data/data';
import { GetProductsService } from '../../core/services/get-products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css'
})
export class SubmenuComponent implements OnInit {
  public categories$?: Observable<Category[]>
  public imagePrefix: string = IMAGEPREURL
  @Input() submenuVisible: boolean = false

  constructor( private getProductsService: GetProductsService ){}

ngOnInit() {
  this.categories$ = this.getProductsService.getCategories()
}
}
