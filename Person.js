const {validateName, validateAge} = require('./utils');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
        this.category = this.setCategory(age);
    }

    setName(name) {
        if (!validateName(name)){
            throw "Invalid Name";
        }
        this.name = name;
    }
    setAge(age) { 
        if(!validateAge(Number(age))){
            throw "Invalid Age";
        }
        this.age = Number(age); }

    getName() { return this.name; }
    getAge() { return this.age; }

    toString() {
        return this.name + " - " + this.age + " - " + this.category;
    }

    setCategory(age) {
        if (age >= 0 && age <= 12) {
            this.category = "Child";
        } else if (age >= 13 && age <= 19) {
            this.category = "Teenager";
        } else if (age >= 20 && age < 65) {
            this.category = "Adult"
        } else if (age >= 65) {
            this.category = "Elderly";
        }
    }
}

module.exports = Person