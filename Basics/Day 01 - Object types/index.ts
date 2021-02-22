enum Role {
    ADMIN,
    READONLY,
    AUTHOR
}

type Person = {
    name: string;
    age: number;
    hobbies?: string[]; // array of strings
    isPremium: boolean; // optional
    role: Role
}
const person: Person = { // assigned as type Person
    name: 'Dhruv Saxena',
    age: 23,
    hobbies: ['Playing', 'Listening'],
    isPremium: true,
    role: Role.ADMIN
}
console.log(person.name)
