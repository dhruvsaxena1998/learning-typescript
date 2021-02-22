const num1 = document.querySelector('#one')! as HTMLInputElement
const num2 = document.querySelector('#two')! as HTMLInputElement
const button = document.querySelector('#add') as HTMLButtonElement

const add = (num1: number, num2: number): number => {
    return num1 + num2
}

button.addEventListener('click', () => {
    console.log(add(+num1.value, +num2.value))
})
