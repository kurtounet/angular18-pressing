import { Injectable } from '@angular/core';
import {
  getAuthenticatedUser,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LemonsqueezyService {
  urlApi: string = "https://api.lemonsqueezy.com/v1/";
  apiKey: string = environment.LEMONSQUEEZY_API_KEY;
  constructor() { }
  //   lemonSqueezySetup({
  //     apiKey,
  //     onError: (error) => console.error("Error!", error),
  // });
  // const { data, error } = await getAuthenticatedUser();
  // if (error) {
  //   console.log(error.message);
  // } else {
  //   console.log(data);
  // }
}
