(()=> {

  const login = (data: {email:string, password: number}) => {
    console.log(data.email, data.password)
  }


  login( {
    email: "",
    password: 123123
  })

  const products: any[] = [];

  type Sizes = 'S' | 'M' | 'L'
  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
      products.push(data);
  }


  addProduct({
    title: "produ1",
    createdAt: new Date(),
    stock: 12,

  })

  console.log(products)
})()
