(()=> {

  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach(item => {
        total += item;

    });

    return total;
  }


  const printTotal = (prices: number[]): void => {
      const rta = calcTotal(prices)
      console.log("el total es ",  rta)
  }

  printTotal([2,2,2,22222])

})()
