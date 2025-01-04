// cypress/support/pages/loginPage.js
import { loginLocators } from '../locators/loginLocators'; // Importa os seletores
import { loginMessages } from '../messages/loginMessages'; // Importa as mensagens

class LoginPage {
  visit() {
    cy.visit('/auth/login'); // Visita a URL de login
  }

  typeUsername(username) {
    cy.get(loginLocators.usernameInput).type(username); // Usa o seletor importado
  }

  typePassword(password) {
    cy.get(loginLocators.passwordInput).type(password); // Usa o seletor importado
  }

  clearUsername() {
    cy.get(loginLocators.usernameInput).clear(); // Limpa o campo de nome de usuário
  }

  clearPassword() {
    cy.get(loginLocators.passwordInput).clear(); // Limpa o campo de senha
  }

  submitLogin() {
    cy.get(loginLocators.loginButton).click(); // Clica no botão de login
  }

  checkUrl(url) {
    cy.url().should('eq', url); // Verifica se a URL está correta
  }

  checkErrorMessage() {
    cy.get(loginLocators.errorMessage).should('contain.text', loginMessages.invalidCredentials); // Usa a mensagem importada
  }

  checkFieldErrorMessage() {
    cy.get(loginLocators.requiredFieldErrorMessage).should('contain.text', loginMessages.requiredField); // Usa a mensagem importada
  }
}

export default new LoginPage(); // Exporta uma instância da classe
