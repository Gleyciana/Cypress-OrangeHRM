/// <reference types="cypress" />

import LoginPage from '../support/pages/loginPage'; 

describe('Login Orange HRM Tests', () => {
  let data; // Declarar a variável onde os dados da fixture serão armazenados

  beforeEach(() => {
    // Carregar a fixture uma única vez antes de cada teste
    cy.fixture('data').then((loadedData) => {
      data = loadedData; // Atribuir os dados carregados a variável `data`
    });

    LoginPage.visit(); // Visita a página de login antes de cada teste
  });

  it('Login - Successful with correct credentials', () => {
    LoginPage.typeUsername(data.validLogin.username);
    LoginPage.typePassword(data.validLogin.password);
    LoginPage.submitLogin();
    LoginPage.checkUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

  it('Login - failed with username and password both incorrect', () => {
    LoginPage.typeUsername(data.invalidLogin.username);
    LoginPage.typePassword(data.invalidLogin.password);
    LoginPage.submitLogin();
    LoginPage.checkErrorMessage();
  });

  it('Login - failed with incorrect username', () => {
    LoginPage.typeUsername(data.invalidUsername.username);
    LoginPage.typePassword(data.invalidUsername.password);
    LoginPage.submitLogin();
    LoginPage.checkErrorMessage();
  });

  it('Login - failure with incorrect password', () => {
    LoginPage.typeUsername(data.invalidPassword.username);
    LoginPage.typePassword(data.invalidPassword.password);
    LoginPage.submitLogin();
    LoginPage.checkErrorMessage();
  });

  it('Login - failed with empty username', () => {
    LoginPage.clearUsername();
    LoginPage.typePassword(data.emptyUsername.password);
    LoginPage.submitLogin();
    LoginPage.checkFieldErrorMessage();
  });

  it('Login - failed with empty password', () => {
    LoginPage.typeUsername(data.emptyPassword.username); 
    LoginPage.clearPassword();
    LoginPage.submitLogin(); 
    LoginPage.checkFieldErrorMessage(); 
  });

  it('Login - failed with both fields empty', () => {
    LoginPage.clearUsername();
    LoginPage.clearPassword(); 
    LoginPage.submitLogin(); 
    LoginPage.checkFieldErrorMessage(); 
  });
});
