let anyVar: any;


let isNew: boolean = anyVar;

let unknownVar: unknown;

unknownVar = true;

unknownVar = {};


if (typeof unknownVar === 'string') {
  unknownVar.trimEnd;
}else if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
  console.log(isNew)
}
const parse = (str: string): unknown => {
  return JSON.parse(str);
}


// unknownVar.doSome();
