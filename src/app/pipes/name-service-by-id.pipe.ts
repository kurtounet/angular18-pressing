import { inject, Pipe, PipeTransform } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'nameServiceById',
  standalone: true
})
export class NameServiceByIdPipe implements PipeTransform {

  serviceService = inject(ServiceService);
  transform(serviceId: number): string | undefined {
    let service = this.serviceService.arrayServices.find(service => service.id === serviceId);
    return service ? service.name : undefined;
  }

}
