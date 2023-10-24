class Placement
{

    btnMasterData='[data-target="#sidebarMasterData"]'
    btnContracts='Contracts'
    btnAddNewContracts='Add New Contract'
    txtName='input[id="name"]'
    txtDescription='textarea[id="description"]'
    btnSubmit='button[id="btn-submit"]'

    clickMasterDataMenu()
    {
        cy.get(this.btnMasterData).click()
    }
    
    
    clickMenuContracts()
    {
        cy.contains(this.btnContracts).click()
    }

    clickAddNewContracts()
    {
        cy.contains(this.btnAddNewContracts).click()
    }

    setName(name)
    {
        cy.get(this.txtName).should('be.visible').type(name)
    }

    setDescription(description)
    {
        cy.get(this.txtDescription).should('be.visible').type(description)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).should('be.enabled').click()
    }
}

export default Placement;