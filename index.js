const Person = require('./Person');
const People = require('./People');
const readline = require('readline');
const { greeting, menuItems, ageGroupOptions, addedHumanConfirmation } = require('./text');

const askQuestion = (theQuestion) => {
    return new Promise((resolve, reject) => {
        try {
            rl.question(theQuestion + ": ", theAnswer => resolve(theAnswer));
        } catch {
            reject("No Answer");
        }
    })
}
greeting();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const people = new People();

async function waitForUserInput() {


    menuItems();
    const answer = await askQuestion("Option ")
    if (answer == 1) {

        var confirmation = 0;
        do {
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
                    person.setageGroup(age);
                } catch (exception) {
                    console.log(exception);
                }
            }
            addedHumanConfirmation(person);
            const answerConfirmation = await askQuestion("[1] Yes | [2] No");
            confirmation = answerConfirmation;

            if(answerConfirmation == 1) { 
                people.add(person); 
            } else {
                console.log("Person not added. Try again.");
            }            
        }
        while (confirmation != 1)

    }
    if (answer == 2) {
        people.listAgeAlpha();
    }

    if (answer == 3) {
        people.listAlpha();
    }

    if (answer == 4) {
        ageGroupOptions();
        const ageGroupOption = await askQuestion("Option ");
        switch(ageGroupOption) {
            case '1':
                people.listAgeGroup("Child");
                break;
            case '2':
                people.listAgeGroup("Teenager");
                break;
            case '3':
                people.listAgeGroup("Adult");
                break;
            case '4':
                people.listAgeGroup("Elderly");
                break;
        }
        
    }
    if (answer == 5) {
        rl.close();
    } else {
        waitForUserInput();
    }

}

waitForUserInput();