class Placement
{

    btnMasterData='[data-target="#sidebarMasterData"]'
    btnPlacements='Placements'
    btnAddNewPlacement='Add New Placement'
    txtName='input[id="name"]'
    txtDescription='textarea[id="description"]'
    btnSubmit='button[id="btn-submit"]'

    clickMasterDataMenu()
    {
        cy.get(this.btnMasterData).click()
    }
    
    
    clickMenuPlacements()
    {
        cy.contains(this.btnPlacements).click()
    }

    clickAddNewPlacements()
    {
        cy.contains(this.btnAddNewPlacement).click()
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