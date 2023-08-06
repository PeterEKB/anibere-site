import { Component, Input } from '@angular/core';
import { CardMetaData } from 'src/app/shared/interfaces/card-meta-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  private _metaData: CardMetaData = { route: '', img: '', alt: ''};
  
  @Input() route: string = '';
  @Input() img: string = '';
  @Input('metaData') set metaData(data: CardMetaData) {
    this._metaData = { ...this.metaData, ...data };
  }
  
  get metaData(): CardMetaData {
    return this._metaData;
  }
}
