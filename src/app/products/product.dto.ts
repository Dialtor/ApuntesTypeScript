import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
//   Omit y Pick type

// Estos tipos de datos nos permiten crear nuevas
// interfaces basadas de otras, pero omitiendo o
// seleccionando solo ciertos valores. Estos
// funcionan de la siguiente forma
}

type example = Pick<Product, 'color' | 'description'>


export interface UpdateProductDto extends Partial<CreateProductDto>{
  // Partial & Required en TS

  // Estos dos tipos de datos nos sirven para declarar
  //  que todos los campos de una interfaz son opcionale
  //   u obligatorios.

  // Nos sirven para declarar que los datos que provienen de
  //  ese tipo o interfaz son opcionales, usualmente lo usamos
  //   al momento de modificar datos.
}

type example2 = Required<Product>;


export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
//   Readonly
readonly tags: ReadonlyArray<string>;
// Con esta propiedad le decimos TypeScript que todos los parámetros
// solamente sean de lectura, por ende no pueden ser mutados a lo
// largo de nuestro programa.

}

type example3 = Readonly<Product>;
