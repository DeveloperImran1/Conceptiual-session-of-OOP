import { Product } from "./product";

export class DigitalProduct extends Product {
  //   dowloadSizeMB: number;   // constructor function er perameter a public keyword add korle aikhane tupe bole dita hoina.
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSizeMB: number
  ) {
    super(id, name, price, quantity);
    // this.dowloadSizeMB = downloadSizeMB;
  }

  getDownloadInfo() {
    console.log(`${this.name} downloading mb: ${this.downloadSizeMB}`);
  }
}
