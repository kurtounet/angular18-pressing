import { ICommande } from "./commande.model";
import { IUser } from "./user.model";

export interface IClient {
  user: IUser;
  clientNumber: number,
  Premium: boolean,

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

