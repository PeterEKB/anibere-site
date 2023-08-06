import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { RouterModule } from '@angular/router';
import { ProductCarouselComponent } from './component/product-carousel/product-carousel.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { CashFormatPipe } from './pipes/cash-format.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ProductCarouselComponent,
    ProductCardComponent,
    CashFormatPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    CardComponent,
    ProductCarouselComponent,
    ProductCardComponent,
    CashFormatPipe,
  ],
})
export class SharedModule {}
