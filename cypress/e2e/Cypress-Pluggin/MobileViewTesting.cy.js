/// <reference types="cypress" />

describe('Handling Iframes', function(){

    beforeEach(() => {
        cy.viewport('iphone-xr') //Open in view mobile
    })
  
    it('Validate that user should be able to write a text inside the available area', function() {
        cy.visitMobile('https://the-internet.herokuapp.com/tinymce') //Visit with Mobile View
        cy.get('#mce_0_ifr').type('Welcome to cypress tutorial').then(function($iframe){

            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
            .clear()
            .type('Welcome To Cypress Edited')
            .type('{selectall}')
            cy.find
            cy.sect
        })
    })
})