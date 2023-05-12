import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavConfigStyle } from '../../interfaces/nav-config';
import { NavConfigService } from '../../services/nav-config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public styling!: Observable<NavConfigStyle>;

  constructor(private s_nav: NavConfigService) {
    this.styling = s_nav.getStyle
  }
}
