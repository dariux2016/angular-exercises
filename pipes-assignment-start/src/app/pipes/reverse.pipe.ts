import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let reversed = '';
    for (let i = value.length; i > 0; i--) {
      reversed += value.charAt(i - 1);
    }

    return reversed;
  }

}