import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavConfigStyle } from '../interfaces/nav-config';

@Injectable({
  providedIn: 'root',
})
export class NavConfigService {
  private defaultStyling: NavConfigStyle = {
    backgroundColor: '#fff',
    overlay: false,
    raise: false,
  };
  private style: BehaviorSubject<NavConfigStyle> = new BehaviorSubject(
    this.defaultStyling
  );

  public getStyle: Observable<NavConfigStyle> = this.style;

  constructor() {}

  setBackgroundColor(color: string) {
    this.style.next({ ...this.style.value, backgroundColor: color });
  }
  setOverlay(overlay: boolean) {
    this.style.next({ ...this.style.value, overlay });
  }
  setRaise(raise: boolean) {
    this.style.next({ ...this.style.value, raise });
  
  }
}
