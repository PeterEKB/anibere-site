import { Component } from '@angular/core';
import { Scroll } from '../../models/scroll';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  scrollShape: string = 'scrollSquareTop';

  constructor(private s_body: BodyService) {}
  ngAfterViewInit() {
    this.s_body.scrollPosition$.subscribe((position: Scroll) => {
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
