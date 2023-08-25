import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ): string {
    if (!value) return '';
    
    const valArray = value.split('. ')

    valArray.forEach((val, index) => {
      valArray[index] = val.charAt(0).toUpperCase() + val.slice(1)
    })
  
    return valArray.join('. ');
  }

}
