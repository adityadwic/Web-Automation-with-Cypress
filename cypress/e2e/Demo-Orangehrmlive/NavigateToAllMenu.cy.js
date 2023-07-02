/// <reference types="cypress" />

describe('Register Testing', () => {

    beforeEach(() => { //Loop auth register in every test case
      cy.visit(Cypress.env("baseUrl-1")) //Using custom command to visit url
    })
  
    it('Navigate to All menu', () => {
        
        //Login with Input username and passsword
        cy.get('[name="username"]').should('be.visible').type(Cypress.env("email-1"))
        cy.get('[name="password"]').should('be.visible').type(Cypress.env("password-1"))
        cy.get('[type="submit"]').should('be.enabled').click()
        
        //Navigate to Search menu
        cy.xpath('//input[@placeholder="Search"]').should('be.visible').click()

        //Navigate to Admin menu
        cy.xpath('//a/span').contains('Admin').should('be.visible').click()

        //Navigate to PIM menu
        cy.xpath('//a/span').contains('PIM').should('be.visible').click()

        //Navigate to Leave menu
        cy.xpath('//a/span').contains('Leave').should('be.visible').click()

        //Navigate to Time menu
        cy.xpath('//a/span').contains('Time').should('be.visible').click()

        //Navigate to Recruitment menu
        cy.xpath('//a/span').contains('Recruitment').should('be.visible').click()

        //Navigate to My Info menu
        cy.xpath('//a/span').contains('My Info').should('be.visible').click()

        //Navigate to Performance menu
        cy.xpath('//a/span').contains('Performance').should('be.visible').click()

        //Navigate to Dashboard menu
        cy.xpath('//a/span').contains('Dashboard').should('be.visible').click()

        //Navigate to Directory menu
        cy.xpath('//a/span').contains('Directory').should('be.visible').click()

        //Navigate to Maintenance menu
        cy.xpath('//a/span').contains('Maintenance').should('be.visible').click()

        //Navigate to Buzz menu
        cy.xpath('//a/span').contains('Buzz').should('be.visible').click()
  
      //Automation to use Numeric & Email Generator. So, every newly created access token will always be different
    //   cy.get('#email').type(AccesToken.toString() + '@yopmail.com')
    //   cy.get('#password').type(authUser.deletepassword)
    //   cy.get('#password_confirmation').type(AccesToken.toString())
    //   cy.get('#subscribe').click()
    //   cy.get('#terms').click()
    //   cy.get("[type='submit']").click()
    //   cy.contains('The password confirmation does not match.').should('have.text', 'The password confirmation does not match.')
    })




})