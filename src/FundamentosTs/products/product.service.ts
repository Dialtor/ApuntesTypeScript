import { Product, Sizes } from "./product.model";


const products: Product[] = [];
const addProduct = (data: Product) => {
    products.push(data);
}

const calcStock = (): number => {
  let total = 0;
  products.forEach(item => {
    total = total + item.stock
  });

  return total
}

export {
  products,
  addProduct,
  calcStock
}