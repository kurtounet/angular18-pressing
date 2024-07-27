export class Cart {
  items: { [id: number]: number } = {};

  addItem(id: number, quantity: number) {
    this.items[id] = (this.items[id] || 0) + quantity;
  }

  removeItem(id: number) {
    delete this.items[id];
  }

  getTotalQuantity() {
    return Object.values(this.items).reduce((total, quantity) => total + quantity, 0);
  }

  getItemQuantity(id: number) {
    return this.items[id] || 0;
  }

  hasItem(id: number) {
    return this.items.hasOwnProperty(id);
  }
}
