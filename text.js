const person = require('./Person');

function greeting() {
    console.log("==============================================================");
    console.log("Welcome to the Human Repository!");
    console.log("Here you will be able to add humans to our records and see ordered lists of all humans ever entered into it.");
}

function menuItems() {
    console.log("Enter the number corresponding to desired option:");
    console.log("[1] Add human to Repository");
    console.log("[2] List humans by age");
    console.log("[3] List humans alphabetically");
    console.log("[4] List humans in chosen age group");
    console.log("[5] Exit Repository");
}

function ageGroupOptions() {
    console.log("Enter number corresponding to desired age group:");
    console.log("[1] Child");
    console.log("[2] Teenager");
    console.log("[3] Adult");
    console.log("[4] Elderly");
}

function addedHumanConfirmation(person) {
    console.log("You wish to add the following person: ");
    console.log(person.toString());
    console.log("Is this correct?");
    console.log("If so, enter 1 to confirm");
}

function closingMessage() {
    console.log("Thank you for using the Human Repository! Hope to see you again soon!");
}
 module.exports = {greeting, menuItems, ageGroupOptions, addedHumanConfirmation}