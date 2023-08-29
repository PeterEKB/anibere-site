import { Component, Input } from '@angular/core';
import { ButtonMetaData } from 'src/app/core/interfaces/button-meta-data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  private _metaData: ButtonMetaData = { route: '', disabled: false };

  @Input() route: string | undefined = undefined;
  @Input() type: string = '';
  @Input() set disabled(value: boolean|string|undefined) {
    if (typeof value === 'string' && value.toLowerCase() === 'true') {
      this._metaData = { ...this.metaData, disabled: true };
    } else if (typeof value === 'boolean') {
      this._metaData = { ...this.metaData, disabled: value };
    } else {
      this._metaData = { ...this.metaData, disabled: true };
    }
  }
  @Input('metaData') set metaData(data: ButtonMetaData) {
    this._metaData = { ...this.metaData, ...data };
  }
  get metaData(): ButtonMetaData {
    return this._metaData;
  }
}
