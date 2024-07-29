class Registrasi {
    visitreg(){
        return cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    }
    InputFirstname(firstname){
        return cy.get('#firstname').type(firstname)
    }
    clearFirstname(){
        return cy.get('#firstname').clear()
    }
    InputLastname(lastname){
        return cy.get('#lastname').type(lastname)
    }
    clearLastname(){
        return cy.get('#lastname').clear()
    }
    InputEmail(emailaddress){
        return cy.get('#email_address').type(emailaddress)
    }
    clearEmail(){
        return cy.get('#email_address').clear()
    }
    InputPass(password){
        return cy.get('#password').type(password)
    }
    clearPass(){
        return cy.get('#password').clear()
    }
    InputPassConfirm(Passconfirm){
        return cy.get('#password-confirmation').type(Passconfirm)
    }
    clearPassConfirm(){
        return cy.get('#password-confirmation').clear()
    }
    clickButtonReg(){
        return cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    }
    errorFirstname(){
        return cy.get('#firstname-error').should('have.text', 'This is a required field.') 
    }
    errorLastname(){
        return cy.get('#lastname-error').should('have.text', 'This is a required field.')
    }
    errorEmail(){
        return cy.get('#email_address-error').should('have.text', 'This is a required field.')
    }
    invalidEmail(){
        return cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    }
    errorPass(){
        return cy.get('#password-error').should('have.text', 'This is a required field.')
    }
    weakPass(){
        return cy.get('#password-strength-meter-label').should('have.text','Weak')
    }
    mediumPass(){
        return cy.get('#password-strength-meter-label').should('have.text','Medium')
    }
    strongPass(){
        return cy.get('#password-strength-meter-label').should('have.text','Very Strong')
    }
    errorPassConfirm(){
        return cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
    }
    invalidPassconfirm(){
        return cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')
    }

}
module.exports = new Registrasi ();