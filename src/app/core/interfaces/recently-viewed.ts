import { Observable } from "rxjs";
import { Product } from "./product";

export interface RecentlyViewed {
  add: (product: Product) => void;
  remove: (product: Product) => void;
  clear: () => void;
  get: () => Product[];
  track: () => Observable<Product[]>;
}
