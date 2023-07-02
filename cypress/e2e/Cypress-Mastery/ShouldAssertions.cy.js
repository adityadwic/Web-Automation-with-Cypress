/// <reference types="cypress" />

describe('Validate complex data using Assert', function(){
  
    it('Assert Function', function() {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        //Asserting Strings
        cy.url().should('include','/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.xpath('//div/h5[1]').should('have.text','Login')
        cy.xpath('//div[1]/p[2]').should('include.text','admin123')
        cy.title().should('not.contain','Testing Automation')
        cy.xpath('//div/h5[1]').should('be.visible')
        cy.xpath('//div/h5[1]').should('exist')
        cy.xpath('//div/button').should('be.enabled').and('not.be.disabled')

    })
})