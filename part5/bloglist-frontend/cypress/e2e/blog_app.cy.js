describe('Blog app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5173')
  })
  it('front page can be opened', function () {
    cy.contains('login')
  })

  it('login form can be opened', function () {
    cy.contains('login').click()
  })

  describe('when logged in', function (){
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('#username').type('root')
      cy.get('#password').type('sekret')
      cy.get('#login-button').click()

      cy.contains('superuser logged in')
    })
    it('a new blog can be created', function(){
      cy.contains('new blog').click()
      cy.get('#title').type('a blog created by cypress')
      cy.get('#author').type('cypress')
      cy.get('#url').type('cypress.com')
      cy.get('#submit').click()
      cy.contains('a blog created by cypress')
    })
  })
})
