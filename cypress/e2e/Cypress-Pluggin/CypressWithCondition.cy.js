// / <reference types="cypress" />

/// <reference types="cypress-if" />

//https://github.com/bahmutov/cypress-if

describe('Handling Iframes', function(){

    it('Validate that user should be able to write a text inside the available area', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('#')
        .if('visible')
        .contains('placeholder', 'Username').click()
    })
})