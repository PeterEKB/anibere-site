import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import {
  EMPTY,
  Observable,
  Subject,
  asapScheduler,
  asyncScheduler,
  concat,
  concatAll,
  concatMap,
  filter,
  map,
  merge,
  switchAll,
  switchMap,
  takeUntil,
  tap,
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
        filter((e) => {
          if (e instanceof NavigationEnd) {
            this.host.nativeElement.scrollTo({ top: 0 });
          }
          return e instanceof NavigationEnd;
        })
      ),
      pageReady = s_body.ready$.pipe(
        filter((value: boolean) => {
          return value === true;
        })
      ),
      getFragment = actRoute.fragment;

    navigationEnd
      .pipe(
        concatMap((_) => pageReady),
        concatMap((_) => getFragment)
      )
      .subscribe((fragment) => {
        if (!!fragment) {
          asyncScheduler.schedule(
            () =>
              host.nativeElement
                .querySelector(`#${fragment}`)
                .scrollIntoView({ behavior: 'smooth' }),
            300
          );
        }
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
