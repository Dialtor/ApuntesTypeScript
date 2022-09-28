export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? "Sin Stock",
    isNew: isNew ?? true, //El operador nullish-oalescing "??" a diferencia del "||" si toma el undefined, si fuera con || tomaria la negación
  }
}

//0 === false
//"" === false
//false === false

const p1 = createProduct(1,true,12);
console.log(p1);
// { id: 1, stock: 12, isNew: true }

const p2 = createProduct(1,true);
console.log(p2);
// { id: 1, stock: 'Sin Stock', isNew: true }

const p3 = createProduct(1,false, 0);
console.log(p3)


