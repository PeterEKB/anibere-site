import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { BodyComponent } from '../body/body.component';
import { Scroll } from '../../models/scroll';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  scrollShape: string = 'scrollSquareTop';
  @ViewChild('body') private scrollContainer!: BodyComponent;

  constructor() {}
  ngAfterViewInit() {
    this.scrollContainer.scrollPosition.subscribe((position: Scroll) => {
      if (position.top) {
        this.scrollShape = 'scrollSquareTop';
      } else if (position.bottom) {
        this.scrollShape = 'scrollSquareBottom';
      } else {
        this.scrollShape = '';
      }
    });
  }
}
