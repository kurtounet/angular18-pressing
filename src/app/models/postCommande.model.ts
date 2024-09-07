
import { IshoppingCartItem } from "./shoppingCartItem.model";

export interface IposteCommande {
  id: number | null;
  ref: string | null;
  client: string | null;
  filingDate: string;
  paymentDate: string;
  returnDate: string;
  items: IshoppingCartItem[];
}

