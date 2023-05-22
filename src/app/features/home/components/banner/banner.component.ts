import { WeekDay } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonMetaData } from 'src/app/core/models/button-meta-data';
import { Weekdays } from 'src/app/core/models/weekdays';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  cTAData: ButtonMetaData = {
    type: 'rounded',
    route: 'store',
  }
  weekdays: Weekdays = {
    sunday: {
      day: 'sunday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
    monday: {
      day: 'monday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
    tuesday: {
      day: 'tuesday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
    wednesday: {
      day: 'wednesday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
    thursday: {
      day: 'thursday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
    friday: {
      day: 'friday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
    saturday: {
      day: 'saturday',
      name: {
        male: 'afua',
        female: 'fdasf',
      },
    },
  };
  weekdaysArray: any = this._weedaysArray;

  ngAfterViewInit() {}

  private get _weedaysArray() {
    return Object.entries(this.weekdays).map(([key, value]) => ({
      key,
      ...value,
    }));
  }
}
