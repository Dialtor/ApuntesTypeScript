const whitoutEnd = (): never => {
  while (true) {
    console.log('Nunca parar de aprender')
  }
}

// Function returning never must not have a reachable end point
const fail = (message: string): never => {
  throw new Error(message)
}

function failV2() {
  return fail("Something failed");
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string'
  }else if(Array.isArray(input)) {
    return 'es un array'
  }else {
    return fail('notmatch')
  }
}


console.log(example("Hello"))
console.log(example([1,2,3]))
console.log(example(123123))
console.log(example("Hola despues del fail"))
