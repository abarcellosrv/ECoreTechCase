const Person = require('./Person');
const {compare} = require('./utils');

class People {
    constructor() {
        this.people = []
    }

    add(person) {
        this.people.push(person);
    }

    list() {

        this.people.sort(compare("name"));
        this.people.sort(compare("age"));
        
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i].toString());
        }
    }
}

module.exports = People;