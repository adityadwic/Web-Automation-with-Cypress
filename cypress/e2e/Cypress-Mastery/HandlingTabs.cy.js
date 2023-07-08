/// <reference types="cypress" />

describe('Handling Tabs', function(){

    it('Testing Tabs', function() {
        cy.visit('https://www.google.com/gmail/about/')
        cy.xpath("//li/a[contains(text(),'Products')]").invoke('removeAttr','target').click()
        cy.xpath("//div[3]/a[contains(text(),'Browse all products')]").click()
    })

})
