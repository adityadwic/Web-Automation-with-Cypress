/// <reference types="cypress" />

describe('Handling of Basic Alerts', function(){
  
    it('Handling basic Alert', function() {
        cy.section('Handling Basic Alert') //Give some huge title
        cy.step('Positif Flow') //Give some small title
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[contains(text(),"Click for JS Alert")]').click()
        cy.on('window:alert', (alertText) => {
            
            expect(alertText).to.contains('I am a JS Alert')
            
        })
    })

    it('Validate that user should be able to write a text inside the available area', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[contains(text(),"Click for JS Alert")]').click()
        cy.on('window:alert', (alertText) => {
            
            expect(alertText).to.contains('I am a JS Alert')

        })

    })
})