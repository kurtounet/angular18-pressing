export interface IitemStatus {
  '@context': string;
  '@id': string;
  '@type': string;
  id: number;
  name: string;
}

export interface ItemStatusCollection {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItemStatus': number;
  'hydra:member': IitemStatus[];
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }
}

