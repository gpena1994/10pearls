import TUTORIALS_POINT_POM_PAGE from "../page-objects/tutorialsPoint-page-pom";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Getting the Iframe by selector
Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});

Cypress.Commands.add("getAllExistingUrl", () => {
  cy.request({
    methods: "GET",
    url: "https://cdn.adpushup.com/40046/urlmapping.json",
  }).then((res) => {
    expect(res.status).to.eq(200);
    cy.log(JSON.stringify(res.body));
    cy.writeFile("cypress/fixtures/urlmapping.json", res.body);
  });
});

Cypress.Commands.add("login", (userEmail, userPasswd) => {
  TUTORIALS_POINT_POM_PAGE.elements.userEmailInput
    .should("be.visible")
    .clear()
    .type(userEmail);
  TUTORIALS_POINT_POM_PAGE.methods.validateEmail();
  
  TUTORIALS_POINT_POM_PAGE.elements.userPasswdInput
  .should("be.visible")
  .clear()
  .type(userPasswd);
  TUTORIALS_POINT_POM_PAGE.elements.rememberMeCheckbox.click();
  TUTORIALS_POINT_POM_PAGE.elements.loginButton.click();
});
