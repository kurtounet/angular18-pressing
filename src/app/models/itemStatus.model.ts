export interface ItemStatus {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ItemStatusCollection {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItemStatus': number;
  'hydra:member': ItemStatus[];
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }
}

