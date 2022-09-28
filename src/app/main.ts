import { addProduct, findProducts, products, updateProduct } from "./products/product.service";
import {faker} from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({

    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    inNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid(),

  })
}

console.log(products)
const product = products[0];

updateProduct(product.id, {
  title: 'New title',
  stock: 80,
  price: 12,
})

findProducts({
  stock: 10,
  color: 'red',
  tags: ['as', 'os']
})
