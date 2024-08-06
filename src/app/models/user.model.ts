

export interface IUser {
  id: number,
  firstname: string,
  lastname: string,
  dateborn: Date,
  email: string,
  password: string,
  mobilephone: string,
  phone: string,
  roles: string[],
  numadrs: number,
  adrs: string,
  city: string,
  zipcode: string,
  country: string
}
/*
export interface UserCollection {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItems': number;
  'hydra:member': User[];
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }
}
*/

export class User {
  id?: number;
  firstname?: string;
  lastname?: string;
  dateborn?: string;
  email?: string;
  mobilephone?: string;
  phone?: string;
  roles?: string[];
  numadrs?: number;
  adrs?: string;
  city?: string;
  zipcode?: string;
  country?: string;

  constructor(
    id?: number,
    firstname?: string,
    lastname?: string,
    dateborn?: string,
    email?: string,
    mobilephone?: string,
    phone?: string,
    numadrs?: number,
    adrs?: string,
    city?: string,
    zipcode?: string,
    country?: string,
    roles?: string[]
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateborn = dateborn;
    this.email = email;
    this.mobilephone = mobilephone;
    this.phone = phone;
    this.roles = roles;
    this.numadrs = numadrs;
    this.adrs = adrs;
    this.city = city;
    this.zipcode = zipcode;
    this.country = country;
  }
  /*
    setLocalStorageToken(token: string) {
      return localStorage.setItem('token', this.token);
    }
    getLocalStorageToken() {
      return localStorage.getItem('token');
    }

  setLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getLocalStorage(user: User) {
    return localStorage.getItem('user');
  }
    */
}
