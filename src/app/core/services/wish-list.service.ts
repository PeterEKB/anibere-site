import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private _wishList: Product[] = [];

  private $wishList: BehaviorSubject<Product[]> = new BehaviorSubject(
    this._wishList
  );

  public wishList$: Observable<Product[]> = this.$wishList;

  constructor() {}

  public add(product: Product) {
    this._wishList.push(product);
    this.$wishList.next(this._wishList);
  }

  public remove(product: Product) {
    this._wishList = this._wishList.filter((p) => p.id !== product.id);
    this.$wishList.next(this._wishList);
  }

  public getWishList() {
    return this._wishList;
  }

  public contains(product: Product) {
    return this._wishList.some((p) => p.id === product.id);
  }
}
