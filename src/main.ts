import { Product } from "./models/product";

import { DigitalProduct } from "./models/digitalProduct";

// const sampleProduct = new Product(12, "Leptop", 30000, 5);
// sampleProduct.getDetails();

const digitalProduct = new DigitalProduct(13, "Headphone", 1200, 2, 100);
digitalProduct.getDownloadInfo();

const sampleProduct = new Product(12, "Leptop", 30000, 5);
sampleProduct.getDetails();

console.log(sampleProduct.sell(20));

sampleProduct.getDetails();
