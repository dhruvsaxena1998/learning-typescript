var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Dhruv Saxena',
    age: 23,
    hobbies: ['Playing', 'Listening'],
    isPremium: true,
    role: Role.ADMIN
};
console.log(person.name);
