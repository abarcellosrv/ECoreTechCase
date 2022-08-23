const Person = require('./Person');
const {compare} = require('./utils');

class People {
    constructor() {
        this.people = []
    }

    add(person) {
        this.people.push(person);
    }

    listAgeAlpha() {

        this.people.sort(compare("name"));
        this.people.sort(compare("age"));
        
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i].toString());
        }
    }
    listAlpha() {
        this.people.sort(compare("name"));
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i].toString());
        }
    }

    
    listAgeGroup(ageGroup){
        const filteredList = this.people.filter(person => person.ageGroup == ageGroup );
        for (let i = 0; i < filteredList.length; i++) {
            console.log(filteredList[i].toString());
        }
    }
}


module.exports = People;