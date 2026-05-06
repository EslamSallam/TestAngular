import { CurrencyPipe, NgForOf, NgIf, NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetails } from "../product-details/product-details";
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service'
import { ActivatedRoute, Router, RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  imports: [NgForOf, ProductDetails, RouterLink, RouterLinkActive],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss'],
  
})
export class Catalog 
{
  products:any = null;
  filter :string = '';
  cart : IProduct[] = [];
  // private Cartsvc: Cart = inject(Cart);
  constructor(private Cartsvc: CartService,private productSVC : ProductService,private router : Router,private route : ActivatedRoute)
  {
      
  }

  ngOnInit()
  {
    this.productSVC.GetProducts().subscribe(
      (products) => {
        this.products = products;
      }
    );
    this.route.queryParams.subscribe((p) => {
      this.filter = p['category'] ?? '';
    })
    console.log(this.filter);
  }

  AddToCart(p:IProduct){
    this.Cartsvc.add(p);
    this.router.navigate(["/cart"]);
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
