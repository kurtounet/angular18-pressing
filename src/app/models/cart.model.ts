export interface CartItem {
  productId: number;
  quantity: number;
  name: string;
  price: number;
}

export class CartItem {
  productId: number = 0;
  quantity: number = 0;
  name: string = '';
  price: number = 0;
}
