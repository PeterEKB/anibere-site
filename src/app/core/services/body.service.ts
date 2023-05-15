import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Scroll } from '../models/scroll';
@Injectable({
  providedIn: 'root',
})
export class BodyService {
  private _scrollInfo: Scroll = {
    position: {
      x: 0,
      y: 0,
    },
    percent: {
      x: 0,
      y: 0,
    },
    top: true,
    bottom: false,
  };
  private _scrollPosition!: BehaviorSubject<Scroll>;

  public scrollPosition$: Observable<Scroll> = this._scrollPosition;

  set scrollPosition(value: Scroll) {
    this._scrollPosition.next(value);
  }

  constructor() {}
}
