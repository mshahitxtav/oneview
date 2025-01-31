import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
  standalone: true,
})
export class GroupByPipe implements PipeTransform {

  transform(value: any[], field: string): any[] {
    if (!value) return [];

    const groupedObj = value.reduce((prev, cur) => {
      if (!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});

    const sortedKeys = Object.keys(groupedObj).sort();
    
    return sortedKeys.map(key => ({ key, value: groupedObj[key] }));
  }
}
