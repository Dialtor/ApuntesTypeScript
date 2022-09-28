// Nico => [N,i,c,o] => string => string []
//[N,i,c,o] => Nico => string[] => string

// escribir de nuevo la función con los parámetros y su tipo de dato
//  de retorno antes de declarar la función como tal, para que de esa
//   forma TS sepa en que casos se retorna cierto valor. Se que no le
//    entendiste, veamos un ejemplo
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //String
  }else if (typeof input === 'string') {
    return input.split(''); //String[]
  }else if (typeof input === 'boolean') {
    return true;
  }
}

export const rtaArray = parseString('Diego');

console.log('rtaArray', rtaArray);

const rtaString = parseString(['D','i','e','g','o']);
console.log(rtaString)

const rtaBoolean = parseString(1);
console.log(rtaBoolean)
