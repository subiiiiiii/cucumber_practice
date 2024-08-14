/*
The cucumber.js file is a configuration file for Cucumber.js. 
It allows you to define default options that Cucumber will use when running your tests. 
This file helps you avoid typing out long commands each time you run your tests by setting up the default behavior for Cucumber.
*/
module.exports = {
    default: '--require features/step_definitions/*.js --format progress',
  };

  /* 
  Breakdown:
  module.exports:
  
  This is a Node.js convention used to export an object so that it can be required in other files. In this case, it’s exporting the configuration for Cucumber.js.
  default:
  
  This key defines the default command-line options that will be used when you run Cucumber.js without specifying any additional options.
  --require features/step_definitions/*.js:
  
  This tells Cucumber to include all JavaScript files in the features/step_definitions/ directory as step definitions.
  The *.js means it will include all .js files in that directory, so any file with step definitions placed there will be automatically loaded.
  --format summary:
  
  This option sets the output format for the test results.
  The summary format provides a concise summary of the results, showing how many scenarios and steps passed or failed without going into detail about each step.
  Importance:
  Automation: By defining these options in the cucumber.js file, you make running your tests simpler and more consistent. You no longer need to specify the paths to your step definitions or the output format every time you run Cucumber.
  
  Consistency: It ensures that everyone on your team runs the tests with the same configuration, leading to consistent output and behavior.
  
  Customizability: You can easily switch formats or include additional options by modifying this file, making it flexible and adaptable to different testing needs. 
  */