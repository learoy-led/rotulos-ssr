import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from '../../../models/models';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  
  //public API_URL = '/api/'
  public API_URL = 'https://rotuloslearoy-api.onrender.com/api/'
  
  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>( `${this.API_URL}categories`, {
      headers: { 'Content-Type': 'application/json' },
    });   
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( `${this.API_URL}products`, {
      headers: { 'Content-Type': 'application/json' },
    });   
   
  } 

  public getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>( `${this.API_URL}categories/${slug}`, {
      headers: { 'Content-Type': 'application/json' },
    });   
  }

  public getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>( `${this.API_URL}products/${slug}`, {
      headers: { 'Content-Type': 'application/json' },
    });   
  }

}
