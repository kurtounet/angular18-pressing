import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { IFeatureCollection } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  urlApiAddress: string = environment.addressUrl;
  http = inject(HttpClient);

  getFeatureCollection(number: number, ville: string): Observable<IFeatureCollection> {
    const query = encodeURIComponent(number + ' ' + 'chemin' + ville + ' ' + '&postcode=69570');
    //console.log(query);
    return this.http.get<IFeatureCollection>(`${this.urlApiAddress}?q=${query}&autocomplete=1`);
  }


}
