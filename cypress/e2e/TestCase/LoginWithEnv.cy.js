/// <reference types="cypress" />

describe('Register Testing', () => {

    beforeEach(() => { //Loop auth register in every test case
      cy.visit(Cypress.env("baseUrl-1")) //Using environtment variable for Secure URL
    })
  
    it('Navigate to All menu', () => {
        
        //Login with Input username and passsword
        cy.get('[name="username"]').should('be.visible').type(Cypress.env("email-1"))
        cy.get('[name="password"]').should('be.visible').type(Cypress.env("password-1"))
        cy.get('[type="submit"]').should('be.enabled').click()
    })
})