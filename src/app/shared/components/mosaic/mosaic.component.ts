import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.scss'],
})
export class MosaicComponent {
  @Input()
  images: string[] = Array(5);
}
