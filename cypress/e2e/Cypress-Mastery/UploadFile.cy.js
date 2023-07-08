/// <reference types="cypress" />

describe('Upload file', function(){

    const product = 'macbook-16".jpg'

    it('Upload image macbook-16 and validation', function() {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("[id='file-upload']").attachFile(product)
        cy.get("[id='file-submit']").click()
        cy.get('h3').should('have.text','File Uploaded!')
        cy.get("[id='uploaded-files']").should('contain.text',product)
    })
})
