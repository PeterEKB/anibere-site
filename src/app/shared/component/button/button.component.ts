import { Component, Input } from '@angular/core';
import { ButtonMetaData } from 'src/app/core/models/button-meta-data';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  private _metaData: ButtonMetaData = {route: ''};
  @Input() route: string = '';
  @Input('metaData')set metaData(data: ButtonMetaData){
    if(data.route){
      this._metaData = data;
    } else {
      this._metaData = {
        ...data,
        route: this.route
      }
    }
    console.log(this._metaData);
  }
  get metaData(): ButtonMetaData {
    return this._metaData;
  }
}
