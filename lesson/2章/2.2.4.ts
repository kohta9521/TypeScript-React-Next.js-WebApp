const user: {name: string; age: number} = {
    name: 'Tokyo',
    age: 36
}

console.log(user.name)
console.log(user.age)


function printName(obj: {firstName: string; lastName?: string }) {
    // ...
}

printName({ firstName: "Kohta"})
printName({ firstName: "Kohta", lastName: "Kochi"})