(()=> {
  let myDynamicVar: string | boolean | number;

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log("tipado string",myText)
    }else{
      console.log("tipado number", myText)
    }
  }

  greeting('asd');
  greeting(123123)

})()
