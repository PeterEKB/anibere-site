import { Component, OnDestroy } from '@angular/core';
import { NavConfigService } from 'src/app/core/services/nav-config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  constructor(private s_nav: NavConfigService) {
    s_nav.setBackgroundColor('transparent')
    s_nav.setOverlay(true)
  }

  ngOnDestroy() {
    this.s_nav.setBackgroundColor('white')
    this.s_nav.setOverlay(false)
  }

}
