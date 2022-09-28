import { Product } from "./product.model";
import { CreateProductDto, FindProductDto, UpdateProductDto} from "./product.dto";
import {faker} from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
//   Como acceder al tipado de cierta propiedad?

// Lo hacemos de una manera muy similar a la cual
// accedemos a valores en arrays dentro de JS,
// pero en este caso, en lugar de hacerlo en un
// array, lo aplicamos a una interfaz.
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}

export const findProducts = (data: FindProductDto): Product[]=> {
  return products;
}


