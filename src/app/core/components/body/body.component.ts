import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import {
  Subject,
  asapScheduler,
  asyncScheduler,
  filter,
  map,
  switchAll,
  switchMap,
  takeUntil,
} from 'rxjs';
import { NavConfigService } from '../../services/nav-config.service';
import { Scroll } from '../../../shared/interfaces/scroll';
import { BodyService } from '../../services/body.service';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  private notifier$: Subject<null> = new Subject();
  private _scrollInfo!: Scroll;
  public isPadded!: boolean;

  constructor(
    private s_body: BodyService,
    private s_nav: NavConfigService,
    private elementRef: ElementRef,
    private actRoute: ActivatedRoute,
    private router: Router,
    private host: ElementRef
  ) {
    const navigationEnd = router.events.pipe(
        takeUntil(this.notifier$),
        filter((e) => e instanceof NavigationEnd)
      ),
      fragmentScroll = navigationEnd.pipe(map((_) => actRoute.fragment));

    fragmentScroll.pipe(switchAll()).subscribe((fragment) => {
      // host.nativeElement.scrollTo({ top: 0 });
      !!fragment
        ? asyncScheduler.schedule(
            () =>
              host.nativeElement
                .querySelector(`#${fragment}`)
                .scrollIntoView({ behavior: 'smooth' }),
            300
          )
        : host.nativeElement.scrollTo({ top: 0 });
    });

    s_nav.getStyle$
      .pipe(takeUntil(this.notifier$))
      .subscribe((style) => (this.isPadded = !style.overlay));
  }
  ngAfterViewInit() {
    this.onScroll();
  }

  scrollToTop() {
    this.host.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('scroll', ['$event'])
  private onScroll = () => this._scrollHelper();
  @HostListener('window:resize', ['$event'])
  private onResize(event: Event) {
    this.onScroll();
  }

  private _scrollHelper() {
    const ele = this.elementRef.nativeElement,
      scrollPosX = ele.scrollLeft,
      scrollPosY = ele.scrollTop,
      scrollMaxX = ele.scrollWidth - ele.offsetWidth,
      scrollMaxY = ele.scrollHeight - ele.offsetHeight;

    this._scrollInfo = {
      position: {
        x: scrollPosX,
        y: scrollPosY,
      },
      percent: {
        x: scrollPosX / scrollMaxX,
        y: scrollPosY / scrollMaxY,
      },
      top: scrollPosY === 0,
      bottom: scrollPosY === scrollMaxY,
    };
    this.s_body.scrollPosition = this._scrollInfo;
  }

  @HostBinding('class.addPadding')
  get addPadding() {
    return this.isPadded;
  }
}
