export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getDetails() {
    console.log(
      `This product name is ${this.name}  and total quantity is ${this.quantity}`
    );
  }
  getStockValue() {
    console.log(`Total ${this.price * this.quantity} Taka`);
  }
  sell(unit: number): string {
    if (this.quantity < unit) {
      return "Vai product to ses. Pre order den ";
    } else {
      this.quantity -= unit;
    }
    return `${this.name} have bin sold ${unit} units`;
  }
}
