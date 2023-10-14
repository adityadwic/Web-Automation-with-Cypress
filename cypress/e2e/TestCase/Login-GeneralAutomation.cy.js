/// <reference types="cypress" />
import Login from "../PageObjects/LoginPage.js";
import Login2 from "../PageObjects/LoginPage-2.js";

describe('Login Testing with General Aproach', () => {
  
    it('Login Test with General Aproach', () => {

      //Visit URL
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      //Login with General Aproach
      cy.get('[name="username"]').should('be.visible').type("Admin")
      cy.get('[name="password"]').should('be.visible').type("admin123")
      cy.get('[type="submit"]').should('be.enabled').click()
      //Verify Dashboard
      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should("have.text","Dashboard")
    })

    it('Login Test using POM', () => {
      //Login with POM
      const ln = new Login();
      ln.setUserName("Admin")
      ln.setPassword("admin123")
      ln.clickSubmit();
      //Verify Dashboard
      ln.verifyLogin();
    })

    it('Login Test using POM with Fixture', () => {

      cy.fixture('Login').then((data)=>{
      //Login using POM with Fixture
      const ln = new Login2();
      ln.setUserName(data.username)
      ln.setPassword(data.password)
      ln.clickSubmit();
      //Verify Dashboard
      ln.verifyLogin();
      
      })
    })
})