// Nico => [N,i,c,o] => string => string []
//[N,i,c,o] => Nico => string[] => string


function parseString(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
      return input.join(''); //String
    }else {
      return input.split('') //String[]
    }
}

const rtaArray = parseString('Diego');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse()
}
console.log('rtaArray', rtaArray);

const rtaString = parseString(['D','i','e','g','o']);
console.log(rtaString)
