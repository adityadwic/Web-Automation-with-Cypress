/// <reference types="cypress" />
import Login from "../PageObjects/LoginPage.js";
import Login2 from "../PageObjects/LoginPage-2.js";

describe('Login Testing', () => {
  
    it('Login Test with General Aproach', () => {
      
      //Login with Custom Commands
      cy.login("Admin","admin123")
      //Verify Dashboard
      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should("have.text","Dashboard")
    })
})
