/// <reference types="cypress" />

describe('Viewport Macbook-16', function(){

    beforeEach(() => {
        cy.visit("www.google.com")
    })

    it('Macbook-16', function() {
        cy.viewport('macbook-16')
        cy.log('Macbook-16"')
        cy.wait(2000)
    })

    it('iphone-xr', function() {
        cy.viewport('iphone-xr')
        cy.log('iphone-xr')
        cy.wait(2000)
    })

    it('ipad-mini', function() {
        cy.viewport('ipad-mini')
        cy.log('ipad-mini')
        cy.wait(2000)
    })

})
