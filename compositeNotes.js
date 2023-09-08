/* Objects
* Composite Data Type
* DO NOT have indexes
* key / value pairs -- these work just like normal variables
* syntax ---{}--- key: value, */

var userObjs = {
    firstName: 'Heidi',
    lastName: 'Chen',
    email: 'hc@dojo.com'
}
var userObjs2 = {
    firstName: 'Tyler',
    lastName: 'Thibault',
    email: 'tt@dojo.com'
}

/* Access the object in two ways
* Primary way in JS is the dot notation ---obj.keyname
* less used but still useful bracket notation --- obj['keyname'] */

console.log(userObjs.firstName);
console.log(userObjs2.email);

var userObjs3 = {
    firstName: 'John',
    lastName: 'Misirlakis',
    email: 'jm@dojo.com',
    address:  {
        houseNumber: '235',
        streetName: 'John St',
        city: 'johnsville',
        state: 'Ohio',
        zipCode: '12345'
    },
    favoriteFoods: [
        'pizza',
        'paint',
        'crayons',
        'tacos',
        'sushi'
    ]
}

console.log(userObjs3.address.city);
console.log(userObjs3.favoriteFoods[2]);

let dog = {
    name: 'Soup',
    hairColor: 'brown'
}

dog.age = 3

console.log(dog);
delete dog.age;
console.log(dog);

//HasOwnProperty returns a boolean

if (dog.hasOwnProperty('name')) {
    console.log("The dog has a name", dog.name)
}

if (dog.hasOwnProperty('toys')) {
    console.log('The dog has some toys');
}
else {
    console.log("Dog has no toys! Sad doggy!");
}
