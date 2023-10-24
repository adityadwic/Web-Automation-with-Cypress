class Placement
{

    btnMasterData='[data-target="#sidebarMasterData"]'
    btnJobLevels='Job Levels'
    btnAddNewJobLevel='Add New Job Level'
    txtName='input[id="name"]'
    txtDescription='textarea[id="description"]'
    btnSubmit='button[id="btn-submit"]'

    clickMasterDataMenu()
    {
        cy.get(this.btnMasterData).click()
    }
    
    clickMenuJobLevels()
    {
        cy.contains(this.btnJobLevels).click()
    }

    clickAddNewJobLevel()
    {
        cy.contains(this.btnAddNewJobLevel).click()
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