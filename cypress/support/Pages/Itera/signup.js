const SignupInputan = require("../../../fixtures/Itera/signup.json");

class signuppage {
  signup = ".form-inline > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)";
  fisrtname = "#FirstName";
  surname = "#Surname";
  epost = "#E_post";
  mobile = "#Mobile";
  username = "#Username";
  password = "#Password";
  conpass = "#ConfirmPassword";
  conpasserr = "#ConfirmPassword-error";
  sub_signup = "#submit";

  firstnameerr = "#FirstName-error";
  surnameerr = "#Surname-error";
  usernameerr = "#Username-error";
  passerror = "#Password-error";

  usernameterdaftar = ".label-danger";

  // Method
  Signup() {
    cy.get(this.signup).click();
  }
  Firstname() {
    cy.get(this.fisrtname).type(SignupInputan.firstname);
  }
  Surname() {
    cy.get(this.surname).type(SignupInputan.surename);
  }
  Epost() {
    cy.get(this.epost);
  }
  Mobile() {
    cy.get(this.mobile);
  }
  Username() {
    cy.get(this.username).type(SignupInputan.validusername);
  }
  Password() {
    cy.get(this.password).clear().type(SignupInputan.pass);
  }
  Conpass() {
    cy.get(this.conpass).clear();
  }
  Sub_signup() {
    cy.get(this.sub_signup).click();
  }
  Conpasserr() {
    cy.get(this.conpasserr).contains(SignupInputan.conpasserr).should("exist");
  }
}
export default signuppage;
