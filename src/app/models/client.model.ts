import {ICommande} from "./commande.model";
import {User} from "./user.model";

export interface IClient {
  clientNumber: number,
  Premium: boolean,
  user: User;
  commande: ICommande[];
}

export interface ClientCollection {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalClients': number;
  'hydra:member': IClient[];
  'hydra:view': {
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next'?: string;
    'hydra:previous'?: string;
  }
}

