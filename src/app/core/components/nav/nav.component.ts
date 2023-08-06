import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  asapScheduler,
  asyncScheduler,
  merge,
  tap,
} from 'rxjs';
import { NavConfigStyle } from '../../../shared/interfaces/nav-config';
import { NavConfigService } from '../../services/nav-config.service';
import { BodyService } from '../../services/body.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private deferRaise!: Subscription;
  private $styling: Subject<NavConfigStyle> = new Subject();

  styling!: NavConfigStyle;
  public styling$: Observable<NavConfigStyle> = this.$styling;
  @ViewChild('nav') private nav!: ElementRef;

  @HostBinding('class.transparent') transparentMode?: boolean;
  @HostBinding('class.overlay') overlayMode?: boolean;
  @HostBinding('class.raise') raiseMode?: boolean;
  @HostBinding('style.backgroundColor') backgroundColor?: string;

  constructor(private s_nav: NavConfigService, private s_body: BodyService) {
    asyncScheduler.schedule(() => {
      s_nav.getStyle$.subscribe((styling: NavConfigStyle) => {
        this.styling = { ...this.styling, ...styling};
        this.$styling.next(this.styling);
        this.transparentMode = styling.transparent;
        this.overlayMode = styling.overlay;
        this.raiseMode = styling.raise;
      });
    });
    asapScheduler.schedule(() => {
      s_body.scrollPosition$.subscribe((pos) => {
        if (pos.position.y > 200) {
          if (this.deferRaise) this.deferRaise.unsubscribe();
          this.deferRaise = asyncScheduler.schedule(() => {
            s_nav.setRaise(true);
          }, 100);
        } else {
          if (this.deferRaise) this.deferRaise.unsubscribe();
          s_nav.setRaise(false);
        }
      });
    });
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.deferRaise) this.deferRaise.unsubscribe();
    if(this.raiseMode)this.s_nav.setRaise(false);
  }
}
