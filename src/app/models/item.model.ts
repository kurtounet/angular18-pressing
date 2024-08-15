import { ICategory } from "./category.model.";
import { ICommande } from "./commande.model";
import { IitemStatus } from "./itemStatus.model";
import { IService } from "./service.model";

export interface Iitem {
  id: number | null;
  service: IService | null;
  commande: ICommande | null;
  category: ICategory | null;
  itemStatus: IitemStatus | null;
  detailItem: string | null;
  price: number | null;
  quantity: number;
  employee: string | null;
}


// export class Item {
//   id: number = 0;
//   service: string = '';
//   commande: string = '';
//   itemStatus: string = '';
//   detailItem: string = '';
//   price: number = 0;
//   quantity: number = 0;
//   employee: string = '';
// }

/*
"id": 1,
"service": "/api/services/3",
"commande": "/api/commandes/8",
"ItemStatus": "/api/item_statuses/2",
"detailItem": " Rien a signalé",
"price": 14.3,
"Quantity": 5,
"employee": "/api/employees/10"
*/


// export interface ItemCollection {
//   '@context': string;
//   '@id': string;
//   '@type': string;
//   'hydra:totalItems': number;
//   'hydra:member': Iitem[];
//   'hydra:view': {
//     '@id': string;
//     '@type': string;
//     'hydra:first': string;
//     'hydra:last': string;
//     'hydra:next'?: string;
//     'hydra:previous'?: string;
//   }
// }

