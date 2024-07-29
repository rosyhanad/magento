class Registrasi {
    visitreg(){
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    }
    InputFirstname(firstname){
        cy.get('#firstname').type(firstname)
    }
    clearFirstname(){
        cy.get('#firstname').clear()
    }
    InputLastname(lastname){
        cy.get('#lastname').type(lastname)
    }
    clearLastname(){
        cy.get('#lastname').clear()
    }
    InputEmail(emailaddress){
        cy.get('#email_address').type(emailaddress)
    }
    clearEmail(){
        cy.get('#email_address').clear()
    }
    InputPass(password){
        cy.get('#password').type(password)
    }
    clearPass(){
        cy.get('#password').clear()
    }
    InputPassConfirm(Passconfirm){
        cy.get('#password-confirmation').type(Passconfirm)
    }
    clearPassConfirm(){
        cy.get('#password-confirmation').clear()
    }
    clickButtonReg(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    }
    errorFirstname(){
        cy.get('#firstname-error').should('have.text', 'This is a required field.') 
    }
    errorLastname(){
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
    }
    errorEmail(){
        cy.get('#email_address-error').should('have.text', 'This is a required field.')
    }
    invalidEmail(){
        cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    }
    errorPass(){
        cy.get('#password-error').should('have.text', 'This is a required field.')
    }
    weakPass(){
        cy.get('#password-strength-meter-label').should('have.text','Weak')
    }
    mediumPass(){
        cy.get('#password-strength-meter-label').should('have.text','Medium')
    }
    strongPass(){
        cy.get('#password-strength-meter-label').should('have.text','Very Strong')
    }
    errorPassConfirm(){
        cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
    }
    invalidPassconfirm(){
        cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')
    }

}
module.exports = new Registrasi ();
