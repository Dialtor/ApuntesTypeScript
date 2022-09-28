type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: Date,
//   stock: number,
//   size: Sizes,
// }

interface Product{
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
}
const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
  size: 'XL',
})

// Interfaces en TS

// Las interfaces funcionan muy similar
// a como lo hace type, pero en las
// solo aplica para los objetos

// ¿Entonces, porque usar interfaces si puedo usar type?

// La razón es sencilla, con las interfaces
//  podemos heredar otras interfaces, y con
//   los type no podemos hacer eso.

interface HumanInterface {
  name: string,
  lastName: string
}
interface HeroInterface extends HumanInterface {
  superPower: string
}

const superHeroe: HeroInterface[] = []
superHeroe.push({
  name: "Diego",
  lastName: "Presiga",
  superPower: "Nuna Parar De Aprender"
})




