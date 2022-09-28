(()=> {
  function SayName(name: string | null){
    let hello = "hello ";
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello)
  }

  SayName(""); //Output: Hello nobody
  SayName("Diego") //Output: Hello Diego

})()
