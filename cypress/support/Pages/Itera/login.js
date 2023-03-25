const LoginInputan = require("../../../fixtures/Itera/login.json");

class loginpage {
  login = ".form-inline > .navbar-nav > :nth-child(2) > .nav-link";
  username = "#Username";
  password = "#Password";
  but_log = ".btn-primary";
  passerr = ".field-validation-error";
  usernameerr = ".alert-danger";
  logout = ".form-inline > .navbar-nav > :nth-child(2) > .nav-link";
  h1 = "h1";
  dashboard = ".container > div:nth-child(4) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)";

  //Method
  Login() {
    cy.get(this.login).click();
  }
  Username() {
    cy.get(this.username).type(LoginInputan.validusername);
  }
  Password() {
    cy.get(this.password).clear().type(LoginInputan.pass);
  }
  But_log() {
    cy.get(this.but_log).click();
  }
  H1d() {
    cy.get(this.h1).should("contain.text", LoginInputan.h1d);
  }
  Logout() {
    cy.get(this.logout).click();
  }
  Dashboard1() {
    cy.get(this.dashboard).should("contain.text", LoginInputan.dashboardl);
  }
}
export default loginpage;
