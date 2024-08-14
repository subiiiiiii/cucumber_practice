// Purpose:
// The stepdef.js file contains the step definitions for your Cucumber tests. 
// Step definitions are the glue between the plain language steps in your .feature files and the actual code that executes when those steps are run.

//Importing Dependencies:

const assert = require('assert');
const{Given, When, Then} = require ('@cucumber/cucumber');

// assert: This is a Node.js built-in module that provides a simple set of assertion tests. It’s used here to verify that the actual result of the code matches the expected result.
// Given, When, Then: These are functions provided by Cucumber.js that are used to define step definitions corresponding to the Given, When, and Then steps in your Gherkin feature files.

//Function to Check the Day:
function isItFriday(today){

    return 'Nope';
}

//This function is a simple utility that returns "Nope" regardless of the input. 
//In a more complex scenario, you might add logic here to check if the day is Friday and return a different response if it is.

Given('today is Sunday', function(){
    this.today = 'Sunday';
});
//This defines the initial context for the scenario.
//Here, it sets this.today to 'Sunday' when the step Given today is Sunday is executed.

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});
//This defines what happens when you perform an action.
//Here, it calls the isItFriday function with this.today (which was set to 'Sunday' in the Given step) and stores the result in this.actualAnswer.

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer,expectedAnswer);
});
//This defines the expected outcome. 
//The assertion checks whether this.actualAnswer matches the expectedAnswer provided in the feature file. 
//If the values don't match, the test will fail.