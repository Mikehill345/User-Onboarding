/*global cy */



describe('Quotes app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
})
const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passInput = () => cy.get('input[name="password"]')
const submitBtn = () => cy.get('#button')
const tosBtn = () => cy.get('input[name="tos"]')

it('checking test', () => {
    expect(1+1).to.equal(2)
})

it('Can type in the inputs', () => {
    nameInput()
    .should('have.value', '')
    .type('Mike Hill')
    .should('have.value', 'Mike Hill')
    .clear()

    emailInput()
    .should('have.value', '')
    .type('Knightmere_X@hotmail.com')
    .should('have.value', 'Knightmere_X@hotmail.com')
    .clear()

    passInput()
    .should('have.value', '')
    .type('meowmeow')
    .should('have.value', 'meowmeow')
    .clear()
})
it('submit button disabled until inputs are filled', () => {
    submitBtn().should('be.disabled')
    nameInput().type('Mike Hill')
    submitBtn().should('be.disabled')
    emailInput().type('Knightmere_X@hotmail.com')
    submitBtn().should('be.disabled')
    passInput().type('meowmeow')
    submitBtn().should('be.disabled')
    tosBtn().click()
    submitBtn().should('not.be.disabled')
    nameInput().clear()
    emailInput().clear()
    passInput().clear()
})
it('submit button working', () => {
    nameInput().type('Mike Hill')
    emailInput().type('Knightmere_X@hotmail.com')
    passInput().type('meowmeow')
    tosBtn().click()
    submitBtn().click()
})
it('checking for validation failure', () => {
    nameInput().type('Mi')
    emailInput().type('Kni')
    passInput().type('meo')
    tosBtn().click()
    cy.contains('password is too short')
    cy.contains('Valid email required')
    cy.contains('Username must be 3 chars or longer')

})
})
