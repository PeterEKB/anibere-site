import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { share } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    CollectionComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
