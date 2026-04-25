import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService 
{
  constructor(private client : HttpClient)
  {

  }

  GetProducts() : Observable<IProduct[]>
  {
    return this.client.get<IProduct[]>('/api/products');
  }

}
