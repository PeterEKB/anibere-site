import { Component, Input } from '@angular/core';
import { ButtonMetaData } from 'src/app/shared/interfaces/button-meta-data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  private _metaData: ButtonMetaData = { route: '' };

  @Input() route: string = '';
  @Input('metaData') set metaData(data: ButtonMetaData) {
    this._metaData = { ...this.metaData, ...data };
  }
  get metaData(): ButtonMetaData {
    return this._metaData;
  }
}
