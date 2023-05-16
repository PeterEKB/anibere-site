import { Component, ElementRef, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { NavConfigService } from '../../services/nav-config.service';
import { Scroll } from '../../models/scroll';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  private notifier$: Subject<null> = new Subject();
  private _scrollInfo!: Scroll;
  public isPadded!: boolean;

  constructor(private s_body: BodyService, private s_nav: NavConfigService, private elementRef: ElementRef) {
    s_nav.getStyle
      .pipe(takeUntil(this.notifier$))
      .subscribe((style) => (this.isPadded = !style.overlay));
  }
  ngAfterViewInit() {
    this.onScroll();
  }
  @HostListener('scroll', ['$event'])
  private onScroll = () => this._scrollHelper()
  @HostListener('window:resize', ['$event'])
  private onResize(event: Event) {
    this.onScroll();
  }

  private _scrollHelper() {
    const ele = this.elementRef.nativeElement,
      scrollPosX = ele.scrollLeft,
      scrollPosY = ele.scrollTop,
      scrollMaxX = ele.scrollWidth - ele.offsetWidth,
      scrollMaxY = ele.scrollHeight - ele.offsetHeight;

    this._scrollInfo = {
      position: {
        x: scrollPosX,
        y: scrollPosY,
      },
      percent: {
        x: scrollPosX / scrollMaxX,
        y: scrollPosY / scrollMaxY,
      },
      top: scrollPosY === 0,
      bottom: scrollPosY === scrollMaxY,
    };
    this.s_body.scrollPosition = this._scrollInfo;
  }
}
