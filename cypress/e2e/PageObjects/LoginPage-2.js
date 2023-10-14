//POM Method 2

class Login
{

    txtUserName='input[name="username"]'
    txtPassword='input[name="password"]'
    btnSubmit='button[type="submit"]'
    lblmsg='.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'

    setUserName(username)
    {
        cy.get(this.txtUserName).should('be.visible').type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).should('be.visible').type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).should('be.enabled').click()
    }

    verifyLogin(username)
    {
        cy.get(this.lblmsg).should("have.text","Dashboard")
    }
}

export default Login;