**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Preparing a project

1. You have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Creat with [Create React App](https://github.com/facebook/create-react-app).
   To get acquainted and configure additional features
   [refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running the `npm start` command.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

# Admission criteria

- The `goit-react-hw-05-movies`.
- When submitting homework, there are two links: to the source files and the
  working pages of each assignment on `GitHub Pages`.
- The component state stores the minimum required set of data, The rest is
  calculated.
- There are no errors or warnings in the console when running the job code.
- For each component has a separate folder with the React-component file and
  styles file.
- For the components are described `propTypes`.
- Everything that a component expects in the form of a prop is passed to it when
  it is called
- Component names are clear, descriptive
- JS-code is clean and clear, `Prettier` is used
- Styling is done by `CSS modules` or `Styled Components`.

## Movie Search.

Create a basic routing for a movie search and storage application. Preview
working application
[see link](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### themoviedb.org API

For the backend, use [themoviedb.org API](https://www.themoviedb.org/). You need
to register (you can enter any data) and get API key. The following endpoints
will be used in this work.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  a list of the most popular movies for today to create a collection on the home
  page page.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  keyword search for a movie on the movies page.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  Request full movie info for the movie page.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  Request cast info for the movie page.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  requesting reviews for the movie page.

[Documentation link](https://developers.themoviedb.org/3/getting-started/introduction)

### Routes.

The app should have the following routes. If a user has accessed a non-existent
route, it must be redirected to the home page.

- The `'/'` - `Home` component, the home page with a list of popular movies.
- The `/'/movies'` - component `Movies`, a page of movie search by keyword.
  keyword.
- `/movies/:movieId'` - component `MovieDetails`, a page with detailed
  information about the movie.
- `/movies/:movieId/cast` - component `Cast`, information about the cast.
  Rendered on the page `MovieDetails`.
- `/movies/:movieId/reviews` - component `Reviews`, information about reviews.
  Rendered on the page `MovieDetails`.

### Code Splitting

Add asynchronous JS code loading for the application routes using `React.lazy()`
and `<Suspense>`.
