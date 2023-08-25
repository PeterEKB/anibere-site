import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CashFormatPipe } from './pipes/cash-format.pipe';
import { SectionComponent } from './components/section/section.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { MosaicComponent } from './components/mosaic/mosaic.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FormatPipe } from './pipes/format.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ProductCarouselComponent,
    ProductCardComponent,
    CashFormatPipe,
    SectionComponent,
    InstagramFeedComponent,
    MosaicComponent,
    CapitalizePipe,
    FormatPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    CardComponent,
    ProductCarouselComponent,
    ProductCardComponent,
    CashFormatPipe,
    SectionComponent,
    InstagramFeedComponent,
    MosaicComponent,
    CapitalizePipe,
    FormatPipe,
  ],
})
export class SharedModule {}
