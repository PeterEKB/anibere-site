import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavConfigService } from '../../services/nav-config.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  private notifier$: Subject<null> = new Subject();

  public isPadded!: boolean;

  constructor(private s_nav: NavConfigService) {
    s_nav.getStyle
      .pipe(takeUntil(this.notifier$))
      .subscribe((style) => (this.isPadded = !style.overlay));
  }
}
