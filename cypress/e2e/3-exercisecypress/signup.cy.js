import signuppage from "../../support/Pages/Itera/signup.js";
const SignupInputan = require("../../fixtures/Itera/signup.json");

describe("Sign Up", () => {
  const SignupPage = new signuppage();
  beforeEach(() => {
    cy.visit("/");
  });

  it("1 Failed Sign Up - No Input Confirm Password", () => {
    //cy.get(SignupPage.signup).click();
    SignupPage.Signup();
    //cy.get(SignupPage.fisrtname).type(SignupInputan.firstname);
    SignupPage.Firstname();
    //cy.get(SignupPage.surname).type(SignupInputan.surename);
    SignupPage.Surname();
    //cy.get(SignupPage.epost);
    SignupPage.Epost();
    //cy.get(SignupPage.mobile);
    SignupPage.Mobile();
    //cy.get(SignupPage.username).type(SignupInputan.validusername);
    SignupPage.Username();
    //cy.get(SignupPage.password).clear().type(SignupInputan.pass);
    SignupPage.Password();
    //cy.get(SignupPage.conpass).clear();
    SignupPage.Conpass();
    //cy.get(SignupPage.sub_signup).click();
    SignupPage.Sub_signup();
    //cy.get(SignupPage.conpasserr).contains(SignupInputan.conpasserr).should("exist");
    SignupPage.Conpasserr();
  });
  it("Failed Sign Up - Empty Credential", () => {
    cy.get(SignupPage.signup).click();
    cy.get(SignupPage.fisrtname);
    cy.get(SignupPage.surname);
    cy.get(SignupPage.epost);
    cy.get(SignupPage.mobile);
    cy.get(SignupPage.username);
    cy.get(SignupPage.password);
    cy.get(SignupPage.conpass);
    cy.get(SignupPage.sub_signup).click();
    cy.get(SignupPage.firstnameerr).contains(SignupInputan.firstnameerr).should("be.visible");
    cy.get(SignupPage.surnameerr).contains(SignupInputan.surnameerr).should("be.visible");
    cy.get(SignupPage.usernameerr).contains(SignupInputan.usernameerr).should("be.visible");
    cy.get(SignupPage.passerror).contains(SignupInputan.passerror).should("exist");
  });
  it("Success Sign Up", () => {
    cy.get(SignupPage.signup).click();
    cy.get(SignupPage.fisrtname).type(SignupInputan.firstname);
    cy.get(SignupPage.surname).type(SignupInputan.surename);
    cy.get(SignupPage.epost);
    cy.get(SignupPage.mobile);
    cy.get(SignupPage.username).type(SignupInputan.validusername);
    cy.get(SignupPage.password).clear().type(SignupInputan.pass);
    cy.get(SignupPage.conpass).clear().type(SignupInputan.pass);
    cy.get(SignupPage.sub_signup).click();
    cy.get(SignupPage.usernameterdaftar).contains(SignupInputan.usernameterdaftar).should("be.visible");
  });
});
