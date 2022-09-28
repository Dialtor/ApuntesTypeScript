(()=>{
  let myProductPrice = 100;
  console.log('productPrice', myProductPrice);

  let customerAge: number = 28;

  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log("productInStock", productInStock);
  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount: number = parseInt('<zx>')
  console.log('discount', discount)
  if (discount <= 200) {
    console.log('apply')
  }else {
    console.log('no apply')
  }
})();
