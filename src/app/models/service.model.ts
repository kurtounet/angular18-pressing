import { Category } from "./category.model.";

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
   
  Category:Category[]
}

export interface ServiceCollection {
  ArrayServices: Service[]
  /*'@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItems': number;
  'hydra:member': Service[];
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }*/
}

