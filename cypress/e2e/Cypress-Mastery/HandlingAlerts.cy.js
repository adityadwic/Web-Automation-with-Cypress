/// <reference types="cypress" />

describe('Handling Alerts', function(){
  
    // it('Handling of basic Alert', function() {
    //     cy.section('Handling Basic Alert') //Give some huge title
    //     cy.step('Positif Flow') //Give some small title
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.xpath('//button[contains(text(),"Click for JS Alert")]').click()
    //     cy.on('window:alert', (alertText) => {
            
    //         expect(alertText).to.contains('I am a JS Alert') 
    //     }) 
    // })

    // it('Handling of confirm Alert OK', function() {
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.xpath('//button[contains(text(),"Click for JS Confirm")]').click()
    //     cy.on('window:alert', (AcceptConfirm) => {
            
    //         expect(alertText).to.contains('I am a JS Confirm')
    //     })
    // })

    it('Handling of confirm Alert Cancel', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath('//button[contains(text(),"Click for JS Confirm")]').click()
        cy.on('window:confirm', (CancelPopup) => {
        return false;
        cy.xpath("//button[@onclick='jsConfirm()']").click()
        cy.get('result').should('have.text','You clicked: Cancel')


            // expect(alertText).to.contains('I am a JS Confirm')
        })
    })

    it('Handling of confirm Alert Prompt Alert', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // cy.xpath('//button[contains(text(),"Click for JS Confirm")]').click()
        cy.window().then(function(PromoAlert){
            cy.stub(PromoAlert,"prompt").returns("Testing Funda Tutorial on Handling Alerts")
            cy.get(':nth-child(3) > button').click()
            cy.get('#result').should('contain.text','Testing Funda Tutorial on Handling Alerts')

        })
    })

})