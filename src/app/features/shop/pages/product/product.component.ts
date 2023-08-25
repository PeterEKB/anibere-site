import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { asapScheduler, asyncScheduler, concatMap, filter, tap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  private _title!: string;
  private _collection!: string;
  private _sku!: string;
  private _variants!: Product[];

  public product!: Product;
  public similarProducts!: Product[];
  public alsoLike!: Product[];

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private s_products: ProductService,
    private s_title: Title
  ) {
    const navEnd = router.events.pipe(
        filter((e) => {
          return e instanceof NavigationEnd;
        })
      ),
      params = activatedRoute.params.pipe(
        tap((val) => {
          this._title = val['title'];
          this._sku = val['sku'];
        })
      );
    navEnd.pipe(concatMap((_) => params)).subscribe((_) => {
      this.product = s_products.findProductBySku(this._sku);
      this.similarProducts = s_products
        .getProductsByCollection(this._collection)
        .concat(s_products.getProductsByCategory(this.product.category)).filter((val)=>val.sku !== this.product.sku);
      asapScheduler.schedule(() => {
        const formattedName = this.product.name
          .replace(/ /g, '-')
          .toLowerCase();
        if (formattedName !== this._title) {
          console.log(formattedName, this._title);
          this.router.navigate(['/shop', formattedName, this.product.sku], {
            replaceUrl: true,
          });
        }
        this.s_title.setTitle(`Anibere ${this.product.name} | Anibere`);
      });
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit() {}

  private getVariants() {
    this._variants = this.s_products.getProductsByUnit(this.product.unit!);
    return this._variants;
  }
  public get variants() {
    return !!this._variants ? this._variants : this.getVariants();
  }
}
