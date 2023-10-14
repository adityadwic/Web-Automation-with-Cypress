/// <reference types="cypress" />

describe('Assert Login Page', () => {

    it('Assert Login Page and validate implicit component', () => {
      //Visit URL
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      //Validate URL Assertion with method 1
      cy.url().should('include','opensource-demo.orangehrmlive.com')
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('contain','orangehrmlive')
      cy.url().should('not.contain','Google')

      //Validate URL Assertion with method 2
      cy.url().should('include','opensource-demo.orangehrmlive.com')
      .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .should('contain','orangehrmlive')
      .should('not.contain','Google')

      //Validate URL Assertion with method 3
      cy.url().should('include','opensource-demo.orangehrmlive.com')
      .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain','orangehrmlive')
      .and('not.contain','Google')

      //Validate in the Login Page
      cy.title().should('eq','OrangeHRM')
      .and('include','Orange')
      .and('contain','HRM')

      //Make variable for validate Page title
      let PageTitle = "OrangeHRM"

      //Validate Page Title
      expect(PageTitle).to.not.equal('google')
      expect(PageTitle).to.be.equal('OrangeHRM')
      expect(PageTitle).to.be.a('string')
      expect(PageTitle).to.have.length.of.at.most(9)

      cy.get('.orangehrm-login-branding').should('be.visible') //Validation of the logo is Visible
      .and('exist') //Validation of the logo is Exist

      cy.xpath('//a').should('have.length','5') //count no of links

      cy.get('input[name="username"]')
      .should('have.attr','placeholder','Username') //Validate username placeholder words attribute
      .and('be.visible') //Validate visible username field

      cy.get('input[name="password"]')
      .should('have.attr','placeholder','Password') //Validate username placeholder words attribute
      .and('have.attr','type','password') //Validate password type attribute
      .and('be.visible') //Validate visible username field

    })

    it('Assert Login Page and validate Explicit component', () => {
      //Visit URL
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      cy.get('[name="username"]').should('be.visible').type("Admin")
      cy.get('[name="password"]').should('be.visible').type("admin123")
      cy.get('[type="submit"]').should('be.enabled').click()

      cy.wait(3000)
      let expName  = "Paul Collings";
      let testName = "Testing QA"

      cy.get('.oxd-userdropdown-name').then((x)=> {
        
        let actName=x.text()

        //BDD Style
        expect(actName).to.equal(expName) //Validation Name of the user
        expect(actName).to.not.equal(testName) //Validation for negative Case

        //TDD Style
        assert.equal(actName,expName) //Validation Name of the user
        assert.notEqual(actName,testName) //Validation for negative Case
        
      })
    
    })

})