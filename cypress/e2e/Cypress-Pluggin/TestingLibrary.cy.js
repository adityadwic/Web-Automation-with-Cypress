/// <reference types="cypress" />

describe('Handling Iframes', function(){

    it('Validate that user should be able to write a text inside the available area', function() {
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.get('#mce_0_ifr').type('Welcome to cypress tutorial').then(function($iframe){

            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
            .clear()
            .type('Welcome To Cypress Edited')
            .type('{selectall}')
        })
    })
})