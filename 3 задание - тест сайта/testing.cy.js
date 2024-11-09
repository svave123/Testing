/// <reference types="cypress" />
describe('My First Test', () => {
  beforeEach(() =>{
      cy.visit('https://www.saucedemo.com')
  })
it('Вписываем пользователя и пароль', () => {

const username = 'standard_user'

const password = 'secret_sauce'

cy.get('[id=user-name]').type(`${username}`)

cy.get('[id=password]').type(`${password}`)

cy.get('[id=login-button]').click()




})
})