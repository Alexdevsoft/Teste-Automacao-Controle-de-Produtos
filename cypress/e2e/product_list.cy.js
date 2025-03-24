describe('Product List App', () => {
    it('should login and add a product', () => {
        cy.visit('./login.html');
        cy.get('#email').type('admin@admin.com');
        cy.get('#senha').type('admin321');
        cy.get('#btn-entrar').click();

        cy.url().should('include', 'produtos.html');

        cy.get('#btn-adicionar').click();
        cy.get('#codigo').type('123');
        cy.get('#nome').type('Produto Teste');
        cy.get('#quantidade').type('10');
        cy.get('#valor').type('100');
        cy.get('#data').type('2024-01-01');
        cy.get('#btn-salvar').click();

        cy.get('#btn-adicionar').click();
        cy.get('#btn-salvar').click();
        cy.get('#btn-sair').click();

        cy.get('#btn-adicionar').click();
        cy.get('#nome').type('Produto Teste');
        cy.get('#quantidade').type('10');
        cy.get('#valor').type('100');
        cy.get('#data').type('2024-01-01');
        cy.get('#btn-salvar').click();
        cy.get('#btn-sair').click();

        cy.get('table tbody tr').should('have.length', 1);
        cy.get('table tbody tr td').eq(0).should('contain', '123');
        cy.get('table tbody tr td').eq
    });
})
