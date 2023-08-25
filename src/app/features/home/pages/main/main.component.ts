import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BodyService } from 'src/app/core/services/body.service';
import { NavConfigService } from 'src/app/core/services/nav-config.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy {
  notifier$: Subject<null> = new Subject();
  numberOfProductsVisible = 4;
  products: Product[] = [];

  constructor(
    private s_nav: NavConfigService,
    private s_body: BodyService,
    private readonly s_product: ProductService
  ) {
    s_nav.setDefaultStyle = {
      transparent: true,
      overlay: true,
    };

    s_body.scrollPosition$.pipe(takeUntil(this.notifier$)).subscribe((pos) => {
      if (pos.position.y > 50) {
        if (s_nav.getStyle.transparent) s_nav.makeTransparent(false);
      } else {
        if (!s_nav.getStyle.transparent) s_nav.makeTransparent(true);
      }
    });

    this.products = this.s_product.getProducts();
  }

  ngOnDestroy() {
    this.s_nav.useDefaultStyle();
    this.stopObs();
  }
  private stopObs() {
    this.notifier$.next(null);
    this.notifier$.complete();
    this.notifier$.unsubscribe();
  }
}
