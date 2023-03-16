const tutorialsPointPage = {
  elements: {
    // --- HOME PAGE ELEMENTS ---
    get agreeCookiesButton() {
      return cy.get("#banner-accept").contains("Agree");
    },
    get topHomeLabel() {
      return cy.get("a.nav-link").contains("Home");
    },
    get codingGroundLabel() {
      return cy.get("a.nav-link").contains("Coding Ground");
    },
    get teachWithUsSpan() {
      return cy.contains("span", "Teach with us");
    },
    get topFacebookButton() {
      return cy.get("i.fab.fa-facebook");
    },
    get topInstagramButton() {
      return cy.get("i.fab.fa-instagram");
    },
    get topTwitterButton() {
      return cy.get("i.fab.fa-twitter");
    },
    get topYouTubeButton() {
      return cy.get("i.fab.fa-youtube");
    },
    get topYouTubeButton() {
      return cy.get("i.fab.fa-linkedin-in");
    },
    get userButton() {
      return cy.get("i.fal.fa-user-circle.fs-user-size");
    },
    get iframe() {
      return cy.get('iframe[class="result"]');
    },
    get topLoginButton() {
      return cy.get(".btn.btn-grey-border.mb-0");
    },
    get previousPageButton() {
      return cy.get(".pre-btn").contains("Previous Page");
    },
    get printPageButton() {
      return cy.get(".pre-btn").contains("Print Page");
    },
    get nextPageButton() {
      return cy.get(".nxt-btn").contains("Next Page");
    },

    // --- USER PROFILE ELEMENTS ---
    get searchTutorialsInput() {
      return cy.get("#search-strings");
    },
    get PrimePacksButton() {
      return cy.get("a").contains("Courses");
    },
    get coursesButton() {
      return cy.get("a").contains("Prime Packs");
    },
    get eBooksButton() {
      return cy.get("a").contains("eBooks");
    },
    get libraryButton() {
      return cy.get("a").contains("Library");
    },
    get articlesButton() {
      return cy.get("a").contains("Articles");
    },

    // --- LOGIN MODAL ELEMENTS ---
    get userEmailInput() {
      return cy.get("#user_email");
    },
    get userPasswdInput() {
      return cy.get("#user_password");
    },
    get rememberMeCheckbox() {
      return cy.get("#remember_me");
    },
    get forgotPasswdLabel() {
      return cy.get("#spanForgot");
    },
    get loginButton() {
      return cy.get("#user_login");
    },
    get googleLoginButton() {
      return cy.get("#btnGoogleLogin");
    },
    get signUpButton() {
      return cy.get("b").contains("Sign Up");
    },
    get emailErrorLabel() {
      return cy.get("#user_email-error").contains("Please enter a valid email address.");
    },

    // --- FOOTER ELEMENTS ---
    get aboutUsButton() {
      return cy.get("a").contains("About us");
    },
    get aboutUsButton() {
      return cy.get("a").contains("Refund Policy");
    },
    get aboutUsButton() {
      return cy.get("a").contains("Terms of use");
    },
    get aboutUsButton() {
      return cy.get("a").contains("Privacy Policy");
    },
    get aboutUsButton() {
      return cy.get("a").contains("FAQ's");
    },
    get aboutUsButton() {
      return cy.get("a").contains("Contact");
    },
  },
  methods: {
    printCurrentURL,
    clickFooterOption,
    verifyUserLoggedIn,
    validateEmail
  },
};

function printCurrentURL(include) {
  cy.url().then((url) => {
    cy.log(url);
  });
  cy.url().should("include", `/${include}/index.htm`);
}

function clickFooterOption(option) {
  cy.get("a").its("2.contentDocument.body").contains(`${option}`).click();
}

function verifyUserLoggedIn(userName){
  cy.url().should("include", '/market/student/dashboard');
    cy.get('#profileImage').invoke('attr', 'aria-expanded', 'true' ).click();
    cy.get('.name').contains(`${userName}`).should('be.visible');
}

function validateEmail(email) {
  let regx = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  if(regx.test(email)){
    cy.log('You have provided a valid Email ID');
  } else {
    cy.log('Sorry! Incorrect format for Email ID');
  }
}

export default tutorialsPointPage;
