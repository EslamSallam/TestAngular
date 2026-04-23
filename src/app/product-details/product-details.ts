import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { NgClass,NgIf,NgFor, NgStyle,CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [NgClass,NgIf,NgStyle,CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(p:IProduct): string
  {
    if (!p)
      return '';
    return `/assets/images/robot-parts/${p.imageName}`;
  }

  BuyProductClicked()
  {
    this.buy.emit();
  }

}
