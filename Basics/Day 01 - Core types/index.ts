/**
 * @params n1 - number, n2 - number
 * @returns [ number | string ]
 * */
const add = (n1: number, n2: number, showString: boolean): number | string => {
    return showString ? `Addition is ${n1 + n2}` : n1 + n2
}
const number1 = 2
const number2 = 4
const showString = true

const result = add(number1, number2, showString)
console.log(result)
