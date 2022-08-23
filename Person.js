const {validateName, validateAge} = require('./utils');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
        this.ageGroup = this.setageGroup(age);
    }

    setName(name) {
        if (!validateName(name)){
            throw "Invalid Name";
        }
        this.name = this.makeNameCapitalized(name);
    }
    setAge(age) { 
        if(!validateAge(Number(age))){
            throw "Invalid Age";
        }
        this.age = Number(age); }

    getName() { return this.name; }
    getAge() { return this.age; }

    toString() {
        return this.name + " - " + this.age + " - " + this.ageGroup;
    }

    setageGroup(age) {
        if (age >= 0 && age <= 12) {
            this.ageGroup = "Child";
        } else if (age >= 13 && age <= 19) {
            this.ageGroup = "Teenager";
        } else if (age >= 20 && age < 65) {
            this.ageGroup = "Adult"
        } else if (age >= 65) {
            this.ageGroup = "Elderly";
        }
    }

    makeNameCapitalized(name) {
        const nameParts = name.split(" ");
        for (let i = 0; i < nameParts.length; i++) {
            nameParts[i] = nameParts[i][0].toUpperCase() + nameParts[i].substr(1);
        }

        return nameParts.join(" ");
    }
}

module.exports = Person