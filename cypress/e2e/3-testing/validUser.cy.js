// import * as dotenv from "dotenv";
// dotenv.config();
// const USER_EMAIL = process.env.EMAIL;
// const USER_PASSWORD = process.env.PASSWORD;

describe("user with valid credentials", () => {
  it("can login user", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("input#email").type("megumi@noroff.no", { delay: 100 });
    cy.get("input#password").type("11111111", { delay: 100 });
    cy.wait(1000);
    cy.get("button.btn").contains("Login").click();
    cy.wait(1000);
    expect(localStorage.getItem("token")).to.be.null;
  });

  it("can log out with logout button", () => {
    cy.wait(1000);
    cy.get("a#logout").click();
    cy.wait(1000);
    expect(localStorage.getItem("token")).to.be.null;
  });
});
