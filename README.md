**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Підготовка проекту

1. Встановлено LTS-версію Node.js.
2. Проект створено за допомогою
   [Create React App](https://github.com/facebook/create-react-app). Для
   ознайомлення та налаштування додаткових можливостей
   [зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).
3. Встановлено базові залежності проекту командою `npm install`.
4. Запуск режиму розробки виконується командою `npm start`.
5. Сторінка в браузері за адресою
   [http://localhost:3000](http://localhost:3000).

# Критерії приймання

- Створено репозиторій `goit-react-hw-05-movies`.
- При здачі домашньої роботи є два посилання: на вихідні файли та робочу
  сторінку завдання на `GitHub Pages`.
- У стані компонентів зберігається мінімально необхідний набір даних, решта
  обчислюється.
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом
  стилів.
- Для компонентів описані `propTypes`.
- Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
- Імена компонентів зрозумілі та описові
- JS-код чистий і зрозумілий, використовується `Prettier`.
- Стилізація виконана `CSS-модулями` або `Styled Components`.

## Кінопошук

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю
робочого застосунку
[дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### themoviedb.org API

Для бекенду використовуй [themoviedb.org API](https://www.themoviedb.org/).
Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У
цій роботі будуть використовуватися наступні ендпоінти.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  список найпопулярніших фільмів на сьогодні для створення колекції на головній
  сторінці.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  пошук фільму за ключовим словом на сторінці фільмів.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  запит повної інформації про фільм для сторінки кінофільму.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  запит інформації про акторський склад для сторінки кінофільму.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  запит оглядів для сторінки кінофільму.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

### Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `Home`, домашня сторінка зі списком популярних кінофільмів.
- `'/movies'` – компонент `Movies`, сторінка пошуку кінофільмів за ключовим
  словом.
- `'/movies/:movieId'` – компонент `MovieDetails`, сторінка з детальною
  інформацією про кінофільм.
- `'/movies/:movieId/cast'` – компонент `Cast`, інформація про акторський склад.
  Рендериться на сторінці `MovieDetails`.
- `'/movies/:movieId/reviews'` – компонент `Reviews`, інформація про огляди.
  Рендериться на сторінці `MovieDetails`.

### Code Splitting (поділ коду)

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи
`React.lazy()` і `Suspense`.
