// function with return type - number
const add = (n1: number, n2: number): number => { 
  return n1 + n2;
};

// function with return type - void
const printAdd = (n1: number, n2: number): void => {
  console.log(n1 + n2)
}

// functions as types
let combineValues: (a: number, b: number) => number;
combineValues = add
// combileValues type is a function that takes 2 number arguments and returns a number

// function as types with callback
// mock
const mock = (n1: number, n2: number, callback: (data: string) => void) => {
  const result = 'HelloWorld'
  callback(result)
}

mock(3, 5, (result) => {
  console.log(result)
})


// Never type
const generateError = (message: string, code: number): never => {
  // A function returning 'never' cannot have a reachable end point.
  throw { message, code }
}
// Never is used where we are sure this will crash or break the script