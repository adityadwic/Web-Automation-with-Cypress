/// <reference types="cypress" />

describe('Login Testing', () => {

    beforeEach(() => { //Loop auth register in every test case
      cy.visit(Cypress.env("baseUrl-1")) //Using custom command to visit url
    })
  
    it('Assert Login Testing', () => {
        //Login with Input username and passsword
        cy.title().should('eq','OrangeHRM')
        let PageTitle = "OrangeHRM"
        
        expect(PageTitle).to.not.equal('google')
        expect(PageTitle).to.be.equal('OrangeHRM')
        expect(PageTitle).to.be.a('string')
        expect(PageTitle).to.have.length.of.at.most(9)
    })

    // it('Login Testing', () => {
    //   //Login with Input username and passsword
    //   cy.title().should('eq','OrangeHRM')
    //   cy.get('[name="username"]').should('be.visible').type(Cypress.env("email-1"))
    //   cy.get('[name="password"]').should('be.visible').type(Cypress.env("password-1"))
    //   cy.get('[type="submit"]').should('be.enabled').click()
    // })
})