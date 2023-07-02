/// <reference types="cypress" />

describe('Register Testing', () => {

    beforeEach(() => { //Loop auth register in every test case
      cy.visit(Cypress.env("baseUrl-2")) //Using custom command to visit url
    })
  
    it('Login Testing', () => {

        //Login with Input username and passsword
        cy.url().should('include','automationexercise.com')
        cy.title().should('eq', 'Automation Exercise')
        cy.xpath('//a/i').contains(' Signup / Login').should('include.text','Signup / Login').should('be.visible').click()
        cy.xpath('//div/h2').contains('New User Signup!')
        .should('have.text','New User Signup!').should('be.visible').should('exist').should('be.enabled')
    
    })
})