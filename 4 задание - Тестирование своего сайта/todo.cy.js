/// <reference types="cypress" />


describe('example to-do app', () => {


  const TABEL_ELEMENT = ".kOMSj8TE0LBty6yatos7 p"
  const FORM_CLASS = ".ZmusGegMkG9sO4AhKft1"
  const CLEAR_BUTTON = ".PLGPl3juaaActKxdqp4r"
  const MODEL_CLASS = ".hOHAbtCOIyeIzsBNXomV"
  const MODEL_CHOICE = ".zOYb8r74bS2EZVcmDp2w .tN6jXHD4obYiSUFu7wci"
  const AGREE_BUTTON = ".WkPsslBJWr7j_C9zxt94"
  const FIRST_BUTTON = "button[tabindex*=1]"
  const FIRST_MESSAGE = "Напиши текст 'Привет', без лишних символов"


  beforeEach(() => {

    cy.visit('https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1')

    for(let i = 1; i < 2; i++)
    {
      cy.get(FIRST_BUTTON).first().click()
      cy.get(FIRST_BUTTON).first().click()
    }

    cy.get(AGREE_BUTTON).click()

  })

  it('(1) Тест работы запроса', () => {

    cy.get("textarea").type(FIRST_MESSAGE)

    cy.get("form").get(FORM_CLASS).submit()

    cy.get(TABEL_ELEMENT).first().should("have.text", FIRST_MESSAGE)
    cy.get(TABEL_ELEMENT).last().should("have.text", "Привет")

    cy.get(CLEAR_BUTTON).click()    

  })

  it('(2) Тест обратной связи', () => {
    cy.get("[data-testid=feedback-prompt] .ffON2NH02oMAcqyoh2UU").click()

    cy.get(".MIAoPCENwoq0tjnFFmLf label").contains("span", "Too slow").click()

    cy.get(".cOx7hUjWg9ntTkUTB5JS").submit()
  })

  it('(3) Тест уравнения', () => {

    cy.get("textarea").type("Напиши ответ для уравнения 2x=6, без лишних слов, только ответ")

    cy.get("form").get(FORM_CLASS).submit()

    cy.get(TABEL_ELEMENT).first().should("have.text", "Напиши ответ для уравнения 2x=6, без лишних слов, только ответ")
    cy.get(TABEL_ELEMENT).last().should("have.text", "x = 3")
    
    cy.get(CLEAR_BUTTON).click()    
  })

  it('(4) Тест перехода на другие модели', () => {

    cy.get(MODEL_CHOICE).click()
    cy.get(MODEL_CLASS + " " +"ul li").get("[for=claude-3-haiku-20240307]").click()

    cy.get("[type=submit]").last().click()
  })

  it('(5) проверка кнопки очистки', () => {

    cy.on("fail", (err, runnable) => {
      cy.log(err.message)
      return true
    })

    cy.get("textarea").type(FIRST_MESSAGE)
    cy.get("form").get(FORM_CLASS).submit()

    cy.get(CLEAR_BUTTON).click()


    cy.get(TABEL_ELEMENT).first().should("have.text", FIRST_MESSAGE)

  })


})
