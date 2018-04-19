import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Server[], args?: any): any {
    return value.sort(this.compareFunction);
  }

  compareFunction(a: Server, b: Server): number {
    if (a.name < b.name) {
      console.log(a.name + " < " + b.name);
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

}

interface Server {
  instanceType: string,
  name: string,
  status: string,
  started: Date
}