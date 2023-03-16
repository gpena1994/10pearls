/// <reference types="cypress" />
/// <reference types = "Cypress-iframe"/>
import "cypress-iframe";
import "cypress-xpath";
import TUTORIALS_POINT_POM_PAGE from "../page-objects/tutorialsPoint-page-pom";
import data from "../fixtures/data.json";

describe("User navigate and interact with Tutorials Point Page", () => {
  beforeEach(() => {
    cy.visit(data.url);
    TUTORIALS_POINT_POM_PAGE.elements.agreeCookiesButton.click();
    cy.reload();
  });

  it("User should be able to identify Iframe and go to About us Page", () => {
    cy.getIframe("iframe.result")
      .get("a.nav-link.fw-bold")
      .contains("About us")
      .eq(0)
      .should("be.visible")
      .click();
    // Printing current URL from new Page
    TUTORIALS_POINT_POM_PAGE.methods.printCurrentURL("about");
  });

  it("Verify all the existing URL, print them in console and save them in a file", () => {
    cy.getAllExistingUrl();
  });

  it("User should be able to Log in using valid credentials", () => {
    cy.getIframe("iframe.result")
      .get(".btn.btn-grey-border.mb-0")
      .click({ force: true });
    cy.login(data.userEmail, data.passwd);
    // Verify User Logged In
    TUTORIALS_POINT_POM_PAGE.methods.verifyUserLoggedIn(data.userName);
  });

  it("User should NOT be able to Log in using invalid credentials", () => {
    cy.getIframe("iframe.result")
      .get(".btn.btn-grey-border.mb-0")
      .click({ force: true });
    cy.login(data.wrongUserEmail, data.wrongPasswd);
    TUTORIALS_POINT_POM_PAGE.elements.emailErrorLabel.should('be.visible');
  });
});
