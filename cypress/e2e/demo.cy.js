describe('Testing on homepage', () => {
	it('Book Now form', () => {
        cy.viewport(1920, 1080)
        cy.visit('/')
        cy.get('.book-a-tour-btn').click()
        cy.get('.sydney[data-country-code="au"]').click()
        cy.get('.hong-kong[data-country-code="hk"]').click()
        cy.get('.singapore[data-country-code="sg"]').click()
        cy.get('input[placeholder="Preferred Locations *"]').click()
    })
})
