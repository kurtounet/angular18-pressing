import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameServiceById',
  standalone: true
})
export class NameServiceByIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
