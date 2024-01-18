describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', '/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', '/api/users/', user)
    cy.visit('')
  })

  it('front page can be opened', function () {
    cy.contains('login')
  })

  it('login form can be opened', function () {
    cy.contains('login').click()
  })

  it('login succeeds', function () {
    cy.contains('login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()

    cy.contains('Matti Luukkainen logged in')
  })

  it('login fails', function () {
    cy.contains('login').click()
    cy.get('#username').type('mluuk')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()

    cy.contains('Wrong credentials')
  })
  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'mluukkai', password: 'salainen' })
    })
    it('a new blog can be created', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('a blog created by cypress')
      cy.get('#author').type('cypress')
      cy.get('#url').type('cypress.com')
      cy.get('#submit').click()
      cy.contains('a blog created by cypress')
    })
    describe('and a blog exists', function () {
      beforeEach(function () {
        cy.createBlog({
          title: 'another blog',
          author: 'by cypress',
          url: 'on a website'
        })
      })
      it('contains the new blog', function () {
        cy.contains('another blog')
      })
      it('user can like a blog', function() {
        cy.contains('another blog').contains('Show Details').click()
        cy.contains('likes: 0').contains('like').click()
        cy.contains('likes: 1')
      })
    })

  })

})
