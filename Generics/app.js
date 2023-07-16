//Generics
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 10 }, { age: 20 }, { age: 30 }];
var player = [
    { name: 'bhaskar', age: 10 },
    { name: 'bhaska', age: 10 },
    { name: 'bhask', age: 30 },
    { name: 'bhas', age: 20 },
];
var person = getOldest(people);
person.age;
