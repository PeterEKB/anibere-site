import { AfterViewInit, HostBinding, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavConfigStyle } from '../interfaces/nav-config';

@Injectable({
  providedIn: 'root',
})
export class NavConfigService {
  private defaultStyling: NavConfigStyle = {
    backgroundColor: 'white',
    transparent: false,
    overlay: false,
    raise: false,
  };
  private userDefaultStyling?: NavConfigStyle;

  public set setDefaultStyle(style: NavConfigStyle) {
    this.userDefaultStyling = style;
    this.style.next(style);
  }
  private style: BehaviorSubject<NavConfigStyle> = new BehaviorSubject({
    ...this.defaultStyling,
    ...this.userDefaultStyling,
  });

  public getStyle!: NavConfigStyle;
  public getStyle$: Observable<NavConfigStyle> = this.style;

  constructor() {
    this.getStyle$.subscribe((style) => {
      this.getStyle = { ...style };
    });
  }

  setBackgroundColor(color: string) {
    this.style.next({ ...this.style.value, backgroundColor: color });
  }
  makeTransparent(transparent: boolean) {
    this.style.next({ ...this.style.value, transparent });
  }
  setOverlay(overlay: boolean) {
    this.style.next({ ...this.style.value, overlay });
  }
  setRaise(raise: boolean) {
    this.style.next({ ...this.style.value, raise });
  }
  useDefaultStyle() {
    this.style.next({ ...this.defaultStyling });
  }
}
