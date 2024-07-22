export interface Category {
  id: number;
  name: string;
  parent: string,
  subcategories: [];
  image: string;
}

export interface CategoryCollection {
  Categories: Category[]
  /*'@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalCategory': number; 
  'hydra:member': Category[];
   'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }*/
}

