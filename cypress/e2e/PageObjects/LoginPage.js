//POM Method 1

class Login
{
    setUserName(username)
    {
        cy.get('[name="username"]').should('be.visible').type("Admin")
    }

    setPassword(password)
    {
        cy.get('[name="password"]').should('be.visible').type("admin123")
    }

    clickSubmit()
    {
        cy.get('[type="submit"]').should('be.enabled').click()
    }

    verifyLogin(username)
    {
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should("have.text","Dashboard")
    }
}

export default Login;