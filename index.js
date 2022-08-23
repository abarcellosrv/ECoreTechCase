const Person = require('./Person');
const People = require('./People');
const readline = require('readline');

const askQuestion = (theQuestion) => {
    return new Promise((resolve, reject) => {
        try {
            rl.question(theQuestion + ": ", theAnswer => resolve(theAnswer));
        } catch {
            reject("No Answer");
        }
    })
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const people = new People();

async function waitForUserInput() {

    const answer = await askQuestion("Command: ")
    if (answer == "add") {
        var person = new Person("", -1);

        while (person.name.length <= 1) {
            const name = await askQuestion("NAME");

            try {
                person.setName(name);
            } catch (exception) {
                console.log(exception);
            }
        }
        while (person.age < 0) {
            const age = await askQuestion("Age");
            try {
                person.setAge(age);
                person.setCategory(age);
            } catch (exception) {
                console.log(exception);
            }
        }
        people.add(person);
        console.log(person);

    }
    if (answer == "list") {
        people.list();
    }
    if (answer == "exit") {
        rl.close();
    } else {
        waitForUserInput();
    }

}

waitForUserInput();