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
