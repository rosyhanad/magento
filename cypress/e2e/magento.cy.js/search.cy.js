describe("Search pada page magento", ()=> {
    beforeEach('akses page magento',()=>{
cy.visit('https://magento.softwaretestingboard.com/')

    })
    it('user mmelakukan pencarian dengan 1 karakter', ()=>{
        cy.get('#search.input-text').type('a{enter}')
        cy.get('.message.notice').should('have.text', '\n\nMinimum Search query length is 3 \nRelated search terms\n\nA+B\n\n\na b c d e f g h I g K l m n o p q r s t u v w x y z\n\n\nA B\n\n\na o\n\n\nA P J\n\n\n\n')
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=a')
        // \n mengindikasikan baris baru
    })
    it('user melakukan dengan 3 karakter', ()=>{
        cy.get('#search.input-text').type('aaa{enter}')
        cy.get('.message.notice').should('have.text', '\n\nYour search returned no results. \nRelated search terms\n\naaa_3a@a\n\n\naaa_3a@a!\n\n\n\n')
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=aaa')
        // \n mengindikasikan baris baru
        })
    it('user melakukan pencarian barang secara spesifik', ()=>{
        cy.get('#search.input-text').type('yellow bags{enter}')
        cy.url().should('eq','https://magento.softwaretestingboard.com/catalogsearch/result/?q=yellow+bags')
        //karena hasil search banyak maka yang saya validasi hanya Url nya saja
        })
    })