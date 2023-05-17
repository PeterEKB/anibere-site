import { WeekDay } from '@angular/common';
import { Component } from '@angular/core';
import { Weekdays } from 'src/app/core/models/weekdays';

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  weekdays:Weekdays = {
    sunday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
    monday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
    tuesday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
    wednesday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
    thursday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
    friday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
    saturday: {
      day: 'sunday',
      name: {
      male: 'afua',
      female: 'fdasf',}
    },
  };
  weekdaysArray: any = [...Object.keys(this.weekdays)];

  ngAfterViewInit() {
    console.log(this._weedaysArray());
  }

  private _weedaysArray() {
    let formattedArray: any = {};

    Object.keys(this.weekdays).forEach((element, index, arr) => {
      formattedArray[element] = arr[index]
    });
    return formattedArray
  }
}
