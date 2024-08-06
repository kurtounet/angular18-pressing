export interface IHydraCollection<T> {
  'hydra:member': T[];
  'hydra:totalItems': number;
}