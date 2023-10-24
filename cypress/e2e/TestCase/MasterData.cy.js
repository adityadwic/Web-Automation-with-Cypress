/// <reference types="cypress" />
import Login2 from "../PageObjects/LoginPage-2.js";
import Placements from "../PageObjects/MasterData/Placements.js"
import Contracts from "../PageObjects/MasterData/Contracts.js"
import Educations from "../PageObjects/MasterData/Educations.js"
import JobLevels from "../PageObjects/MasterData/JobLevels.js"


describe('Automation Testing Master Data with POM (Page Object Model)', () => {

    beforeEach(() => { //Loop auth register in every test case
      cy.visit(Cypress.env("baseUrl-1")) //Using custom command to visit url
    })

    it('Login Testing using POM with Fixture', () => {

      cy.fixture('Login').then((data)=>{
      //Login using POM with Fixture
      const ln = new Login2();
      ln.setEmail(data.email)
      ln.setPassword(data.password)
      ln.clickLogin();
      //Verify Dashboard
      ln.verifyLogin();
      cy.wait(2000)
      })
    })

    it('Add New Placements', () => {

      cy.fixture('Login').then((data)=>{
      //Login using POM with Fixture
      const ln = new Login2();
      ln.setEmail(data.email)
      ln.setPassword(data.password)
      ln.clickLogin();
      //Verify Dashboard
      ln.verifyLogin();

      const pl = new Placements();
      pl.clickMasterDataMenu()
      pl.clickMenuPlacements()
      pl.clickAddNewPlacements()
      pl.setName('Testing QA')
      pl.setDescription('Testing QA Description')
      pl.clickSubmit()
      cy.wait(2000)
      })
    })

    it('Add New Contracts', () => {

      cy.fixture('Login').then((data)=>{
      //Login using POM with Fixture
      const ln = new Login2();
      ln.setEmail(data.email)
      ln.setPassword(data.password)
      ln.clickLogin();
      //Verify Dashboard
      ln.verifyLogin();

      const pl = new Contracts();
      pl.clickMasterDataMenu()
      pl.clickMenuContracts()
      pl.clickAddNewContracts()
      pl.setName('Testing QA')
      pl.setDescription('Testing QA Description')
      pl.clickSubmit()
      cy.wait(2000)
      })
    })

    it('Add New Educations', () => {

      cy.fixture('Login').then((data)=>{
      //Login using POM with Fixture
      const ln = new Login2();
      ln.setEmail(data.email)
      ln.setPassword(data.password)
      ln.clickLogin();
      //Verify Dashboard
      ln.verifyLogin();

      const pl = new Educations();
      pl.clickMasterDataMenu()
      pl.clickMenuEducations()
      pl.clickAddNewEducations()
      pl.setName('Testing QA')
      pl.setDescription('Testing QA Description')
      pl.clickSubmit()
      cy.wait(2000)
      })
    })

    it('Add New Job Levels', () => {

      cy.fixture('Login').then((data)=>{
      //Login using POM with Fixture
      const ln = new Login2();
      ln.setEmail(data.email)
      ln.setPassword(data.password)
      ln.clickLogin();
      //Verify Dashboard
      ln.verifyLogin();

      const pl = new JobLevels();
      pl.clickMasterDataMenu()
      pl.clickMenuJobLevels()
      pl.clickAddNewJobLevel()
      pl.setName('Testing QA')
      cy.wait(1000)
      pl.setDescription('Testing QA Description')
      pl.clickSubmit()
      cy.wait(2000)
      })
    })

})