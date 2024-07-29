import LoginPage from '../../support/pages/Login'

describe("Login Test POM at Magento",()=>{

    beforeEach ('Mengakses Halaman Login Magento',()=>{
        cy.clearCookies()
        LoginPage.visit()
    })

    it('Mengosongkan Email dan Password', ()=>{
        LoginPage.Emailclear()
        LoginPage.Passclear()
        LoginPage.clickbutton()
        LoginPage.errorEmail()
        LoginPage.errorPass()
    })

    it('Mengosongkan Email saja',()=>{
        LoginPage.Emailclear()
        LoginPage.getPassInput('ROSEhana123@')
        LoginPage.clickbutton()
        LoginPage.errorEmail()
    })
    it('Mengosongkan Password Saja',()=>{
        LoginPage.getEmailInput('rosehana@mailinator.com')
        LoginPage.Passclear()
        LoginPage.clickbutton()
        LoginPage.errorPass()
    })

    it('incorrect input email',()=>{
        LoginPage.getEmailInput('rosehana')
        LoginPage.getPassInput('ROSEhana123@')
        LoginPage.clickbutton()
        LoginPage.incorrectEmail()
    })

    it('Incorrect input Password',()=>{
        LoginPage.getEmailInput('rosehana@mailinator.com')
        LoginPage.getPassInput('rosehana')
        LoginPage.clickbutton()
        LoginPage.incorrectPass()
    })

    it('Berhasil Login',()=>{
        LoginPage.getEmailInput('rohana@mailinator.com')
        LoginPage.getPassInput('ROSEhana123')
        LoginPage.clickbutton()
        LoginPage.succesLogin()
    })

})