(() => {


  type Sizes = 'S' | 'M' | 'L'
  const createProductToJson = (
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
) => {
  return {
    title,
    createdAt,
    stock,
    size
  }
}

  const producto1 = createProductToJson('P1', new Date(), 12, "L");
  const producto2 = createProductToJson2('P1', new Date(), 12);

  console.log(producto1)
  console.log(producto2)
  console.log(producto2.size)
})
