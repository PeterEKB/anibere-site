import { Component, Input } from '@angular/core';
import { ButtonMetaData } from '../../../core/interfaces/button-meta-data';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  private _tag: string = 'section';
  private _last: boolean = false;
  private _button: ButtonMetaData = {
    text: '',
  };

  @Input()
  id: string = '';
  @Input('heading')
  title: string = 'Section';
  @Input()
  size: string = 'half';
  @Input()
  set button(data: ButtonMetaData) {
    this._button = data;
  }
  @Input()
  set last(val: boolean | string) {
    const trueVals: Array<string | boolean> = [true, 'true', ''];

    if (trueVals.includes(val)) this._last = true;
    else this._last = false;
  }
  @Input()
  set tag(tag: string) {
    this._tag = tag.toLowerCase();
  }

  get button(): ButtonMetaData {
    return this._button;
  }
  get tag(): string {
    return this._tag;
  }
  public get last(): boolean {
    return this._last;
  }
}
