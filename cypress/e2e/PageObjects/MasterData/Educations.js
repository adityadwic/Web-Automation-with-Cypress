class Placement
{

    btnMasterData='[data-target="#sidebarMasterData"]'
    btnEducations='Educations'
    btnAddNewEducations='Add New Education'
    txtName='input[id="name"]'
    txtDescription='textarea[id="description"]'
    btnSubmit='button[id="btn-submit"]'

    clickMasterDataMenu()
    {
        cy.get(this.btnMasterData).click()
    }
    
    
    clickMenuEducations()
    {
        cy.contains(this.btnEducations).click()
    }

    clickAddNewEducations()
    {
        cy.contains(this.btnAddNewEducations).click()
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