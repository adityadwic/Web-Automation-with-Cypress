/// <reference types="cypress" />

describe('Validate complex data using Assert', function(){
  
    it('Assert Function', function() {

        cy.visit('www.google.com')
        //Asserting Strings

        let FirstName = "TestingADC"

        assert.equal(FirstName, "TestingADC")
        assert.include(FirstName, "Testing")
        assert.typeOf(FirstName, "String")
        assert.notTypeOf(FirstName, "Integer")

        //Asserting Object

        let person = {
            FirstName2:"Testing", LastName2:"ADC"
        }

        assert.property(person, 'LastName2')
        assert.isObject(person)
        assert.deepPropertyVal(person, 'LastName2','ADC')
        assert.deepEqual(person, {
            FirstName2:"Testing", LastName2:"ADC"
        })

        //Asserting Array

        let employeeId2 = [1,2,3,4,5]
        assert.isArray(employeeId2)
        assert.includeDeepMembers(employeeId2, [1,2])
        assert.includeDeepOrderedMembers(employeeId2, [1,2,3,4,5])
        assert.typeOf(employeeId2, 'Array')
        
    })
})