describe('Initial test', () => {
    it('Tests to make sure Cypress is running properly', () => {
        expect(true).to.equal(true);
    });
});

//test that you can add text to the box - check
describe('Testing form input name', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza');
    });

    it('Tests name input', () => {
        cy.get('#name')
          .type('Alanna Mathieu')
          .should('have.value', 'Alanna Mathieu')
    })
});

describe('Testing form input optional', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza');
    });

    it('Tests name input', () => {
        cy.get('#special')
          .type('No cheese, I am allergic.')
          .should('have.value', 'No cheese, I am allergic.')
    })
});

//test that you can select multiple toppings
describe('Tests if multiple toppings can be selected', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza');
    });

    it('Tests checkboxes', () => {
        cy.get('input[type="checkbox"]')
          .check() //act
          .should('be.checked') //assert
    })
});

// test that you can submit the form
describe('Tests form submission', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza');
    });

    it('Tests submit button', () => {
        cy.get('form').submit()
    })
});