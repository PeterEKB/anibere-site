import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  route: string = '_';
  @Input()
  product: Product = {
    id: 0,
    name: 'Title',
    collection: 'collection',
    sku: 'sku',
    category: 'Product Category',
    description: {
      quickDescription: ['A quick description of the product.'],
      fullDescription:
        'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
    },
    prices: {
      price: 45,
      discount: 30,
      currency: 'usd',
    },
    images: {
      primary: 0,
      secondary: 1,
      list: ['', ''],
    },
    createdAt: '',
  };
}
