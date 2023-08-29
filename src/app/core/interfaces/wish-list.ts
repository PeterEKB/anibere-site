import { Observable } from 'rxjs';
import { Product } from './product';

export interface WishList {
  add: (product: Product) => void;
  remove: (product: Product) => void;
  getWishList: () => Product[];
  contains: (product: Product) => boolean;
  clear: () => void;
  track: () => Observable<Product[]>;
}
