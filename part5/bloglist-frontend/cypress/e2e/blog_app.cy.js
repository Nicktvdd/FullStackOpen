describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:5173/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:5173/api/users/', user) 
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
      cy.get('#username').type('mluukkai')
      cy.get('#password').type('salainen')
      cy.get('#login-button').click()

      cy.contains('Matti Luukkainen logged in')
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
