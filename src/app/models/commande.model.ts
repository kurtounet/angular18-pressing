export interface ICommande {
  id: number;
  ref: string;
  client: string;
  filingDate: Date;
  paymentDate: Date;
  returnDate: Date;
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

