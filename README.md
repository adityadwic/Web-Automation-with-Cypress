
# Login Project Automation with Cypress

This project demonstrates a robust and efficient login functionality using Cypress, a powerful end-to-end testing framework for modern web applications. The primary goal is to provide a comprehensive example of how to create, manage, and execute login tests using Cypress.

***Features :***
* Simple and Intuitive Syntax: Cypress provides a clean and intuitive syntax, making it easy for both developers and testers to read, write, and understand test scripts.
* Real-Time Reloads: Instantly view changes to your application and test code in real-time as Cypress automatically reloads the application when changes are made.
* Time-Travel Debugging: Debugging is made efficient with time-travel, allowing you to inspect the state of your application at any point during test execution.
* Automatic Waiting: Cypress intelligently waits for elements to appear and actions to complete, eliminating the need for manual waits or sleeps in your test scripts.
* Bundled Test Runner: The Cypress Test Runner provides a rich environment for running and debugging tests, including interactive command logging and real-time test status updates.
* Cross-Browser Testing: Cypress supports cross-browser testing, enabling you to run your tests on multiple browsers to ensure consistent behavior across different environments.
* Parallel Test Execution: Execute tests in parallel, significantly reducing the overall test execution time and allowing for faster feedback in the development cycle.
* Network Traffic Control: Monitor, intercept, and control network traffic to simulate various network conditions, helping you test how your application behaves in different scenarios.
* Headless and Interactive Modes: Run tests in headless mode for automated CI/CD pipelines, or switch to interactive mode for real-time exploration and debugging.
* Cross-Device Testing: Test your application's responsiveness and functionality on different devices by easily switching between viewport sizes and device orientations.
## Requires
* [node](https://nodejs.org/en/)
* [git](https://git-scm.com/)
    
## Getting Started ##

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-todomvc#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-todomvc.git

## cd into the cloned repo
cd cypress-example-todomvc

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8888` which hosts the TodoMVC app.

You can verify this by opening your browser and navigating to: [`http://localhost:8888`](http://localhost:8888)

You should see the TodoMVC app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/getting-started/installing-cypress#Installing)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)

## Run Locally

Clone the project

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-project.git
```

Go to the project directory

```bash
## cd into the cloned repo
cd cypress-example-project
```

Install dependencies

```bash
## install the node_modules
npm install
```

Start the server

```bash
## start the local webserver
npm start
```

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)
## Usage ##

This project serves as a foundation for testing the login functionality of your web applications using Cypress. Feel free to customize and extend the tests according to your application's specific requirements.

## Folder Structure ##
* cypress/downloads: Contains Cypress downloaded files.
* cypress/e2e: Contains Cypress test files.
* cypress/fixtures: Store fixture files with sample data for tests.
* cypress/PageObjects: Store Page Object files with sample data for tests.
* cypress/support: Custom commands and utility functions for testing.


## Running Cypress

To run cypress, run the following command

```bash
  npx cypress open
```

