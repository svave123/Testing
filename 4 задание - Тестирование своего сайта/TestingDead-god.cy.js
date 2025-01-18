describe("Тестирование функции поиска на сайте dead-god.ru", () => {
  beforeEach(() => {
    cy.visit("https://dead-god.ru/");
    cy.clearCookies();
  });
  //     it('Тест 1: Должен нажать на кнопку поиска и ввести текст в поле ввода', () => {
  //       cy.get('.search__input').click().should('be.visible');
  //       cy.get('input[placeholder="Введите запрос"]').type('Poop');
  //       cy.get('[data-unique-id="35"]').click();
  //       cy.get('.info__synergies.info__list-block').click();
  //     });

  it('Тест 2: Проверка окна "Нашли ошибку?"', () => {
    cy.contains("button", "Нашли ошибку?").click({ force: true });
    cy.get("#issue-location").click();
    cy.get("#issue-send").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Не все поля заполнены");
      cy.get("#issue-location").type("Там");
      cy.get("textarea.issue__input").click();
      cy.get("#issue-desc").click();
      cy.get('#issue-desc[placeholder="Опишите ошибку"]').type(
        "ну крч сам разбирайся"
      );
    });
  });

  it("Тест3: Проверка разрешений", () => {
    cy.viewport(600, 866);
    cy.get(".nav-menu__link").should("not.be.visible");
    cy.get(".nav-button").should("be.visible");
    cy.get(".nav-button", { multiple: true }).eq(1).click();
  });

  //  it('Тест4: Проверка фильтров', () => {
  //   cy.get('.filter__button').click();
  //   cy.get('#hide_1').click();
  //   cy.get('#pool_golden_chest').click({force: true});
  //   cy.get('.filter__button').click();
  //   });

  //     it('Тест5: Проверка путей у ссылок ', () => {`
  //     cy.contains('Объяснение характеристик').click();
  //     cy.location('pathname').should('include', 'stats');
  //     cy.go('back');
  //     cy.contains('О сайте').click();
  //     cy.location('pathname').should('include', 'about');
  //     cy.go('back');
  //     cy.contains('История изменений').click();
  //     cy.location('pathname').should('include', '%d0%b8%d1%81%d1%82%d0%be%d1%80%d0%b8%d1%8f-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b9');
  //     cy.go('back');
  //      });
});
