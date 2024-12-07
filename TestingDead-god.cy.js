describe('Тестирование функции поиска на сайте dead-god.ru', () => {
    it('Тест 1: Должен нажать на кнопку поиска и ввести текст в поле ввода', () => {

      cy.visit('https://dead-god.ru/');

      cy.get('.search__input').click();

      cy.get('input[placeholder="Введите запрос"]').type('Poop');

      cy.get('[data-unique-id="35"]').click();

      cy.get('.info__synergies.info__list-block').click();

    });


    it('Тест 2: Проверка окна "Нашли ошибку?"', () => {
      cy.visit('https://dead-god.ru/');

      cy.contains('button', 'Нашли ошибку?').click({force: true});

      cy.get('#issue-location').click();

      cy.get('#issue-location').type('Там');

      cy.get('textarea.issue__input').click();

      cy.get('#issue-description').click();

      cy.get('#issue-description[placeholder="Опишите ошибку"]').type('ну крч сам разбирайся');
    });


        it('Тест3: Проверка разрешений', () => { 
          cy.visit('https://dead-god.ru/');

          cy.viewport(1020, 680);

          cy.viewport('ipad-2');
      
        });
      });
  