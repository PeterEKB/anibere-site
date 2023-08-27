import { Component, ElementRef } from '@angular/core';
import { Scroll } from '../../../shared/interfaces/scroll';
import { BodyService } from '../../services/body.service';
import { asapScheduler, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  scrollShape: string = 'scrollSquareTop';

  constructor(private s_body: BodyService, private host: ElementRef) {
    this.s_body.setReady = false;
    host.nativeElement.classList.add('loading');
  }
  ngAfterViewInit() {
    asapScheduler.schedule(() => {
      this.host.nativeElement.classList.remove('loading');
      this.s_body.setReady = true;
    }, 250);
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
