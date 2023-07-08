/// <reference types="cypress" />

describe('How to use Fixtures', function(){

    before(function(){
        cy.fixture('example').then(function(loginData){
            this.loginData=loginData
        })
    })

    it('Use fixtures to login', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//div/input[@name="username"]').type(this.loginData.username)
        cy.xpath('//div/input[@name="password"]').type(this.loginData.password)
        cy.get("[type='submit']").click()
    })
})
