# itallent-test-automation
Test automation project for the I-Tallent session using Cypress.

# Overview
- Basic info
- How to Configure
- How to run

# Basic info
before starting on the project you'll need to run the 'npm install' command to install all needed dependencies. Once you have
done that it is possible to use the predefined scripts in package.json. The 'local' script profile is used for local debugging 
not for actually running the tests, since we would like to do that headless. 

# How to Configure project
In the project we are using specs, and pre-configured scripts (examples, project). These scripts use a folder, and it 
runs all tests within that folder.

# How to run
in the package.json you will be able to find the run scripts under the script tag. Once there you'll notice that different 
profiles will result in a different result. Chaining scripts is also possible by using 'npm otherScriptName'.

```json
{
  "scripts": {
    "cypress:open:specs": "npx cypress open --config-file cypress.config.spec.js",
    "cypress:run:specs": "npm run clean:data && npm run run:specs",
    "run:specs": "npx cypress run --config-file cypress.config.spec.js --spec 'cypress/e2e/1-advanced-examples/*.js'",
    "cypress:open:cucumber": "npx cypress open --config-file cypress.config.cucumber.js",
    "cypress:run:cucmber": "npm run clean:data && npm run run:cucumber",
    "run:cucumber": "npx cypress run --config-file cypress.config.cucumber.js --spec 'cypress/e2e/2-cucumber-examples/*.feature'",
    "clean:data": "npm run clean:report && npm run clean:videos && npm run clean:screenshots",
    "clean:report": "rm -rf ./reports/*",
    "clean:videos": "rm -rf ./cypress/videos",
    "clean:screenshots": "rm -rf ./cypress/screenshots"
  }
}
```

## Environment Param config
The most important is the usage of environment parameters which allows you to set certain environmental values. These environment
parameters can be chained by comma separation. 

The way we  use them in this project is to:
1. choose which tests to run (project, examples)
2. choose which config to run (dev, acc, prod)
