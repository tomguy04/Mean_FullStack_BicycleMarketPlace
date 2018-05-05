import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {

  transform(array: any, args?: any): any {

    if ( !array || !args ) { return array; }

    let order = [];

    if ( args === 'asc') {
      order = [-1, 1];
    } else { order = [1, -1]; }

    return array.sort(function(a, b) {

      let dateA = new Date(a.createdAt),
          dateB = new Date(b.createdAt);

      if ( dateA < dateB ) { return order[0]; }
      if ( dateA > dateB ) { return order[1]; }
      return 0;
    });

  }

}