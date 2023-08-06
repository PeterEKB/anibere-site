import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cashFormat',
})
export class CashFormatPipe implements PipeTransform {
  transform(value: number | string, soldOut: boolean = true): number | string {
    if (!soldOut) return 'Sold Out';

    if (typeof value === 'string') value = parseFloat(value);

    if (isNaN(value)) return '—';

    if (value < 0) return '-$' + Math.abs(value);

    if (value === 0) return '$0';

    if (value % 1) return '$' + value.toFixed(2);

    if (value > 0) return '$' + value;

    return value;
  }
}

interface CashFormatPipeOptions {
  soldOut?: boolean;
}
