/// <reference types="cypress" />

describe('Expect Assertions', () => {

    beforeEach(() => { //Loop auth register in every test case
      cy.visit(Cypress.env("baseUrl-1")) //Using custom command to visit url
    })
  
    it('Validate Complex data using Expect', () => {
      
        //Simple String Verification
          
        cy.title().should('eq','OrangeHRM')
        let PageTitle = "OrangeHRM"
          
        expect(PageTitle).to.not.equal('google')
        expect(PageTitle).to.be.equal('OrangeHRM')
        expect(PageTitle).to.be.a('string')
        expect(PageTitle).to.have.length.of.at.most(9)


        //Validating Objects

        let person = {
          firstName:"Testing",lastName:"Funda"
        }

        expect(person).to.deep.equal({
          firstName:"Testing",lastName:"Funda"
        })

        expect(person).to.have.property('lastName','Funda')

        
        //Validating Arrays
        
        let EmployeeIds = [1,2,3,4,5]

        expect(EmployeeIds).to.have.ordered.members([1,2,3,4,5])
        expect(EmployeeIds).to.include(2)
        expect(EmployeeIds).to.include.members([1,2])

    })
})