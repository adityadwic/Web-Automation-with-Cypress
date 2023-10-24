class Login
{

    txtEmail='input[id="email"]'
    txtPassword='input[id="password"]'
    btnLogin='button[type="submit"]'
    lblmsg='Dashboard'

    setEmail(email)
    {
        cy.get(this.txtEmail).should('be.visible').type(email)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).should('be.visible').type(password)
    }

    clickLogin()
    {
        cy.get(this.btnLogin).should('be.enabled').click()
    }

    verifyLogin()
    {
        cy.contains(this.lblmsg).should("contain.text","Dashboard")
    }
}

export default Login;