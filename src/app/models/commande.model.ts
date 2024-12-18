export interface ICommande {
  '@context': string;
  '@id': string;
  '@type': string;
  id: number | null;
  ref: string | null;
  client: string | null;
  filingDate: string;
  paymentDate: string;
  returnDate: string;
}

export interface CommandeCollection {
  arrayCommandes: ICommande[];
  /*
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalCommands': number;
  'hydra:member': Commande[];
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }*/
}

