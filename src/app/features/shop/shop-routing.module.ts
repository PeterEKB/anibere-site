import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './pages/product/product.component';
import { CollectionComponent } from './pages/collection/collection.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: ':collection',
    component: CollectionComponent
  },
  {
    path: ':title/:sku',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
