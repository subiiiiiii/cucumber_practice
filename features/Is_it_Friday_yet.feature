# feature declaration and description
Feature: Is it Friday yet?
    Everybody wants to know when it's Friday
    # test case scenario
    Scenario: Sunday isn't Friday
        #condition
        Given today is Sunday
        #action
        When I ask whether it's Friday yet
        #expected outcome
        Then I should be told "Nope"


# How It Connects to Step Definitions:
# Each step in the scenario (Given, When, Then) is matched to a corresponding step definition in your stepdef.js file.

# The text in the feature file steps 
    #(e.g., "today is Sunday", "I ask whether it's Friday yet", "I should be told 'Nope'") 
    #is used to find and execute the appropriate code in the step definitions.


# Importance:
    # Readable Tests: 
        #The .feature file allows you to write tests in a way that is easily understandable by non-technical stakeholders. 
        #It acts as both documentation and executable test cases.
    # Behavior-Driven Development (BDD): 
        #By writing scenarios in this format, you follow a BDD approach, 
        #where you define the desired behavior of the application before or alongside development.
    # Collaboration: 
        #The plain language format encourages collaboration between developers, testers, and business stakeholders 
        #since everyone can understand and contribute to the test scenarios.

# Example Flow:
    # The Scenario is Loaded: 
        #Cucumber reads the Scenario: Sunday isn't Friday.
    # Steps are Matched: 
        #Cucumber matches Given today is Sunday, When I ask whether it's Friday yet, and Then I should be told "Nope" to their respective step definitions in the stepdef.js file.
    # Steps are Executed: 
        #Each step runs the corresponding code in the step definitions, and the scenario passes or fails based on whether the expected outcomes are met.