describe("Login Test at Magento",()=>{
    beforeEach ('Mengakses halaman login',()=>{
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dC8%2C/')
    })
    it('Mengosongkan field login',()=>{
        cy.get('#email').clear()
        cy.get('#pass').clear()
        cy.get('#send2').click()
        cy.get('#email-error').should ('have.text', 'This is a required field.')
        cy.get('#pass-error').should ('have.text', 'This is a required field.')
    })
    it('Mengosongkan field email',()=>{
        cy.get('#email').clear()
        cy.get('#pass').type('ROSEhana123')
        cy.get('#send2').click()
        cy.wait(500)
        cy.get('#email-error').should ('have.text', 'This is a required field.')
    })
    it('Mengosongkan field password',()=>{
        cy.get('#email').type('roseeehana@mailinator.com')
        cy.get('#pass').clear()
        cy.get('#send2').click()
        cy.get('#pass-error').should ('have.text', 'This is a required field.')  
    })
    it('Mengisi field email dengan invalid email',()=>{
        cy.get('#email').type('roseeehana')
        cy.get('#pass').type('ROSEhana123')
        cy.get('#send2').click()
        cy.get('#email-error').should ('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')  
    })
    it('Mengisi password dengan invalid password ',()=>{
        cy.get('#email').type('roseeehana@mailinator.com')
        cy.get('#pass').type('ROSE')
        cy.get('#send2').click()
        cy.get('.message-error').should ('have.text', '\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n') 
    })
    it('Berhasil login',()=>{
        cy.get('#email').type('rohana@mailinator.com')
        cy.get('#pass').type('ROSEhana123')
        cy.get('#send2').click()
        cy.get('.logged-in').should('have.text', 'Welcome, Rohan Rohanna!Welcome, Rohan Rohanna!')
    })
})