import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Observable, asapScheduler, asyncScheduler, fromEvent } from 'rxjs';
import { Product } from '../../../core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent {
  test = Array(20);
  @Input() products: Product[] = [];
  @Input() number: number = 6;

  @ViewChild('container')
  container!: ElementRef;
  @ViewChild('prev')
  prevButton!: ElementRef;
  @ViewChild('next')
  nextButton!: ElementRef;

  private scroll!: Observable<Event>;

  constructor() {
  }

  ngAfterViewInit() {
    this.nextPrevVisibility();
    this.scroll = fromEvent(this.container.nativeElement, 'scroll');
    this.scroll.subscribe(this.nextPrevVisibility);
  }

  scrollRight() {
    this.container.nativeElement.scrollLeft +=
      this.container.nativeElement.offsetWidth;
    asyncScheduler.schedule(this.nextPrevVisibility, 400);
  }

  scrollLeft() {
    this.container.nativeElement.scrollLeft -=
      this.container.nativeElement.offsetWidth;
    asyncScheduler.schedule(this.nextPrevVisibility, 400);
  }

  nextPrevVisibility = () => {
    if (this.container.nativeElement.scrollLeft <= 50)
      this.prevButton.nativeElement.classList.add('disabled');
    else this.prevButton.nativeElement.classList.remove('disabled');

    if (
      this.container.nativeElement.scrollLeft +
        this.container.nativeElement.offsetWidth +
        50 >=
      this.container.nativeElement.scrollWidth
    )
      this.nextButton.nativeElement.classList.add('disabled');
    else this.nextButton.nativeElement.classList.remove('disabled');
  };
}
