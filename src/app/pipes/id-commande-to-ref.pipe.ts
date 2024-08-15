import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCommandeToRef',
  standalone: true
})
export class IdCommandeToRefPipe implements PipeTransform {



  transform(value: string): unknown {
    return null;
  }

}
