describe("fails user with invalid credentials", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.clearLocalStorage();
  });

  it("fails user with invalid email", () => {
    cy.get("input#email").type("invalid@noroff.no", { delay: 100 });
    cy.get("input#password").type("11111111", { delay: 100 });
    cy.wait(1000);
    cy.get("button.btn").contains("Login").click();
    cy.wait(1000);
    expect(cy.get("div.formError").contains("Invalid email or password"));
  });

  it("fails user with invalid password", () => {
    cy.get("input#email").type("megumi@noroff.no", { delay: 100 });
    cy.get("input#password").type("invalid", { delay: 100 });
    cy.wait(1000);
    cy.get("button.btn").contains("Login").click();
    cy.wait(1000);
    expect(cy.get("div.formError").contains("Invalid email or password"));
  });
});
