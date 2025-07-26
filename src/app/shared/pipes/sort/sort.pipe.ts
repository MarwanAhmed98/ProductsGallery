import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  transform(array: any[], property: string, order: 'asc' | 'desc' = 'asc', isNumber: boolean = false): any[] {
    if (!array || !property || array.length <= 1) {
      return array;
    }
    return [...array].sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];
      if (isNumber) {
        return order === 'asc' ? valueA - valueB : valueB - valueA;
      } else {
        return order === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
    });
  }
}