const DashboardInputan = require("../../../fixtures/Itera/dashboard.json");

class dashboardpage {
  login = ".form-inline > .navbar-nav > :nth-child(2) > .nav-link";
  username = "#Username";
  password = "#Password";
  but_log = ".btn-primary";
  passerr = ".field-validation-error";
  h1 = "h1";
  h2 = "h2";
  dashboard = ".container > div:nth-child(4) > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)";
  dashcustomer = ".table > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(7) > a:nth-child(1)";
  company = "#Company";
  address = "#Address";
  city = "#City";
  phone = "#Phone";
  email = "#Email";
  backcustomerdetail = ":nth-child(3) > .btn";
  but_edit = ".col-md-offset-2 > .btn";
  search = "#searching";
  but_search = ".container > div > form > .btn";
  table1 = "tbody > :nth-child(2) > :nth-child(6)";
  table2 = ".table > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)";

  // Method
  Login() {
    cy.get(this.login).click();
  }
  Username() {
    cy.get(this.username).type(DashboardInputan.validusername);
  }
  Pass() {
    cy.get(this.password).clear().type(DashboardInputan.pass);
  }
  But_log() {
    cy.get(this.but_log).click();
  }
  H1d() {
    cy.get(this.h1).should("contain.text", DashboardInputan.h1d);
  }
  Dashcustomer() {
    cy.get(this.dashcustomer).click();
  }
  H2e() {
    cy.get(this.h2).should("contain.text", DashboardInputan.h2e);
  }
  Company() {
    cy.get(this.company).clear().type(DashboardInputan.company);
  }
  Address() {
    cy.get(this.address).clear().type(DashboardInputan.address);
  }
  City() {
    cy.get(this.city).clear().type(DashboardInputan.city);
  }
  Phone() {
    cy.get(this.phone).clear().type(DashboardInputan.phone);
  }
  Email() {
    cy.get(this.email).clear().type(DashboardInputan.validemail);
  }
  Backcustomer() {
    cy.get(this.backcustomerdetail).click();
  }
  H2dc() {
    cy.get(this.h2).should("contain.text", DashboardInputan.h2dc);
  }
  But_edit() {
    cy.get(this.but_edit).click();
  }
  Validemail() {
    cy.get(this.search).type(DashboardInputan.validemail);
  }
  But_search() {
    cy.get(this.but_search).click();
  }
  Table1() {
    cy.get(this.table1).should("contain.text", DashboardInputan.validemail);
  }
  Invalidemail() {
    cy.get(this.search).type(DashboardInputan.invalidemail);
  }
  Table2() {
    cy.get(this.table2).should("contain.text", DashboardInputan.invalid);
  }
}
export default dashboardpage;
