declare namespace Cypress {
  interface Chainable<Subject> {
    addIngredient(title: string): Chainable<Subject>;
  }
}
