import { CurrencyPipe, NgForOf, NgIf, NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetails } from "../product-details/product-details";
import { Cart } from '../cart';
import { ProductService } from './product.service'

@Component({
  selector: 'bot-catalog',
  imports: [ NgForOf, ProductDetails],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss'],
  
})
export class Catalog 
{
  products:any = null;
  filter :string = '';
  cart : IProduct[] = [];
  // private Cartsvc: Cart = inject(Cart);
  constructor(private Cartsvc: Cart,private productSVC : ProductService)
  {
      
  }

  ngOnInit()
  {
    this.productSVC.GetProducts().subscribe(
        (products) => {
          this.products = products;
        }
    );
    console.log('completed');
  }

  AddToCart(p:IProduct){
    this.Cartsvc.add(p);
  }

  getImageUrl(p:IProduct): string
  {
    if (!p)
      return '';
    return `/assets/images/robot-parts/${p.imageName}`;
  }

  getFilteredProducts()
  {
    if (!this.products) return [];
    return this.filter === '' ? this.products : this.products.filter((p:any) => p.category === this.filter);
  }
}
