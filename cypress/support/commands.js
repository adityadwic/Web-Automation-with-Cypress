// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')



//Customize Command

Cypress.Commands.add("login",(username, password)=>{

    //Visit URL
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //Login with General Aproach
    cy.get('[name="username"]').should('be.visible').type(username)
    cy.get('[name="password"]').should('be.visible').type(password)
    cy.get('[type="submit"]').should('be.enabled').click()

})
