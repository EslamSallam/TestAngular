import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model'; ;
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root',
})
export class Cart {

  cart:IProduct[] = []; 

  constructor(private client:HttpClient)
  {

  }

  add(product:IProduct)
  {
    this.cart.push(product);
    this.client.post('/api/cart',this.cart).subscribe(() => {
      console.log(`added product ${product.name} to cart server`);
    });
    console.log('Product added to cart: ' + product.name);
  }

}
