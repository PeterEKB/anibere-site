import { WeekDay } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonMetaData } from 'src/app/core/interfaces/button-meta-data';
import { Weekdays } from 'src/app/core/interfaces/weekdays';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  cTAData: ButtonMetaData = {
    type: 'rounded',
    route: 'booking',
  }
  gender: string = 'female';
  weekdays: Weekdays = {
    sunday: {
      day: 'sunday',
      route: 'shop',
      img: 'assets/images/sundayLook.jpg',
      name: {
        male: 'afua',
        female: 'Esi',
      },
    },
    monday: {
      day: 'monday',
      img: 'assets/images/mondayLook.jpg',
      name: {
        male: 'afua',
        female: 'Adwoa',
      },
    },
    tuesday: {
      day: 'tuesday',
      img: 'assets/images/tuesdayLook.jpg',
      name: {
        male: 'afua',
        female: 'Abena',
      },
    },
    wednesday: {
      day: 'wednesday',
      img: 'assets/images/wednesdayLook.jpg',
      name: {
        male: 'afua',
        female: 'Ekua',
      },
    },
    thursday: {
      day: 'thursday',
      img: 'assets/images/thursdayLook.jpg',
      name: {
        male: 'afua',
        female: 'Aba/Ya',
      },
    },
    friday: {
      day: 'friday',
      img: 'assets/images/fridayLook.jpg',
      name: {
        male: 'afua',
        female: 'Efua',
      },
    },
    saturday: {
      day: 'saturday',
      img: 'assets/images/saturdayLook.jpg',
      name: {
        male: 'afua',
        female: 'Ama',
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
