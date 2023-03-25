import loginpage from "../../support/Pages/Itera/login.js";
const LoginInputan = require("../../fixtures/Itera/login.json");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Login & Logout", () => {
  const LoginPage = new loginpage();
  beforeEach(() => {
    cy.visit("/");
  });

  it("Failed Login - Empty Password", () => {
    cy.get(LoginPage.login).click();
    cy.get(LoginPage.username).type(LoginInputan.validusername);
    cy.get(LoginPage.password);
    cy.get(LoginPage.but_log).click();
    cy.get(LoginPage.passerr).contains(LoginInputan.passerr).should("exist");
  });
  it("Failed Login - Wrong Username", () => {
    cy.get(LoginPage.login).click();
    cy.get(LoginPage.username).type(LoginInputan.invalidusername);
    cy.get(LoginPage.password).clear().type(LoginInputan.pass);
    cy.get(LoginPage.but_log).click();
    cy.get(LoginPage.usernameerr).contains(LoginInputan.usernameerr).should("exist");
  });
  it("Success Login", () => {
    //cy.get(LoginPage.login).click();
    LoginPage.Login();
    //cy.get(LoginPage.username).type(LoginInputan.validusername);
    LoginPage.Username();
    //cy.get(LoginPage.password).clear().type(LoginInputan.pass);
    LoginPage.Password();
    //cy.get(LoginPage.but_log).click();
    LoginPage.But_log();
    //cy.get(LoginPage.h1).should("contain.text", LoginInputan.h1d);
    LoginPage.H1d();
  });
  it("Success Logout", () => {
    //cy.get(LoginPage.login).click();
    LoginPage.Login();
    //cy.get(LoginPage.username).type(LoginInputan.validusername);
    LoginPage.Username();
    //cy.get(LoginPage.password).clear().type(LoginInputan.pass);
    LoginPage.Password();
    //cy.get(LoginPage.but_log).click();
    LoginPage.But_log();
    //cy.get(LoginPage.h1).should("contain.text", LoginInputan.h1d);
    LoginPage.H1d();
    //cy.get(LoginPage.logout).click();
    LoginPage.Logout();
    //cy.get(LoginPage.dashboard).should("contain.text", LoginInputan.dashboardl);
    LoginPage.Dashboard1();
  });
});
