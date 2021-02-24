// Unions ( accepts different types of values )
// Literals ( when you want a varible to have some specific values, kinda like enum)
const add = (
  n1: number | string,
  n2: number | string,
  typecase: "as-number" | "as-string" // only accept values of 'as-number' and 'as-string'
): number | string => {
  const num =
    typeof n1 === "number" && typeof n2 === "number"
      ? n1 + n2
      : String(n1) + String(n2);

  return typecase === "as-number" ? +num : String(num);
};

// Type Alias
type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-string";
const combine = (
  n1: Combineable,
  n2: Combineable,
  typecase: ConversionDescriptor // only accept values of 'as-number' and 'as-string'
): Combineable => {
  const num =
    typeof n1 === "number" && typeof n2 === "number"
      ? n1 + n2
      : String(n1) + String(n2);

  return typecase === "as-number" ? +num : String(num);
};


// Unkown Type
let user: unknown
// can store any value like any
// unknown is better thn any as it restrict the type 
