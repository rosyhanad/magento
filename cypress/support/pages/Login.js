class LoginPage {
    visit() {
        return cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dC8%2C/');
    }
    getEmailInput(email){
        return cy.get('#email').type(email)
    }
    Emailclear(){
        return cy.get('#email').clear()
    }
    getPassInput(pass){
        return cy.get('#pass').type(pass)
    }
    Passclear(){
        return cy.get('#pass').clear()
    }
    clickbutton(){
        return cy.get('#send2').click()
    }
    errorEmail(){
        return cy.get('#email-error').should ('have.text', 'This is a required field.')
    }
    errorPass(){
        return cy.get('#pass-error').should ('have.text', 'This is a required field.')
    }
    incorrectEmail(){
        return cy.get('#email-error').should ('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')  
    }
    incorrectPass(){
        return cy.get('.message-error').should ('have.text', '\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n')
    }
    succesLogin(){
        return cy.get('.logged-in').should('have.text', 'Welcome, Rohan Rohanna!Welcome, Rohan Rohanna!')
    }
}
module.exports = new LoginPage ();