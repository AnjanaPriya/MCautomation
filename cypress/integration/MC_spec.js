//This is the new line that is added
//Another comment added
describe('Merchant COnsole Automation',function(){
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('installing the wishlist app',function(){

        cy.visit('https://admin.swymrelay.com/swym-login')
    
        cy.get('#username').type('test-login1@gmail.com')
    
        cy.get('#password').type('UniversityBank6^')
        
        cy.wait(4000)

        cy.get('button').contains("Login").click()
        
    })

})
