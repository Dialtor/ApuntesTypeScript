import {addProduct, calcStock, products} from './product.service';


addProduct({
  title: "producto1",
  createdAt: new Date(),
  stock: 12,
})

addProduct({
  title: "producto2",
  createdAt: new Date(),
  stock: 12,
  size: 'L',
})

const total = calcStock();

console.log("Productos: ", products, "total: ", total)
