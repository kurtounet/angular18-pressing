import {ICategory} from "./category.model.";

export interface IService {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  Category: ICategory[]
}

// export interface ServiceCollection {
//   ArrayServices: IService[]
//   '@context': string;
//   '@id': string;
//   '@type': string;
//   'hydra:totalItems': number;
//   'hydra:member': IService[];
//   'hydra:view': {
//     '@id': string;
//     '@type': string;
//     'hydra:first': string;
//     'hydra:last': string;
//     'hydra:next'?: string;
//     'hydra:previous'?: string;
//   }
// }

