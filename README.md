# MovieHub
MovieHub is a feature-rich web application that allows you to explore a vast collection of movies and TV shows. It is built using React and leverages the power of the TMDB (The Movie Database) API to provide an extensive database of entertainment content. Whether you're a cinephile looking for your next favorite film or just browsing for an enjoyable evening of TV, MovieHub has you covered.
![home1](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/9430a632-b112-4a2e-9867-7882b239e9e5)

## Hosted Link on Netlify
https://moviehub-redux.netlify.app/ - Click the Link to Preview <br/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/f9f313d3-646f-44ea-87be-61215e8efaad/deploy-status)](https://app.netlify.com/sites/moviehub-redux/deploys) <br/>

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#Folder-structure)
5. [License](#license)
6. [Demo](#demo)

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) (v14.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/erpankajk4/MovieHub---React-Redux-SCSS.git
   ```

2. Navigate to the project directory:
   ```
   cd MovieHub---React-Redux-SCSS
   ```
3. Install the project dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
Your web app should now be running locally. Open your web browser and access it at http://localhost:5173 or the port specified in your app.

## Features
**Moviehub** offers a range of features that enhance your movie and entertainment experience. Here are some of the key features:
1. **Browse Movies and TV Shows**: Discover a wide range of movies and TV shows, from the latest releases to classic favorites.
2. **Interactive User Interface**: A user-friendly and interactive interface for easy navigation and content discovery.
3. **Home Page**: The home page features dynamic sections such as trending movies, popular titles, and top-rated content to keep you updated on the latest releases.
4. **Details Page**: Dive deep into the details of your favorite movies and shows, including cast information, videos, and recommendations.
5. **Search and Filter**: Easily find content by title, genre and more.
6. **Trailer Playback**: Watch trailers for movies right within the app using the React Player library.
7. **Responsive Design**: The app is designed to be responsive, ensuring a great user experience on both desktop and mobile devices.
8. **Genre Filter**: Filter content by genre to find movies and shows that match your preferences.
9. **User Ratings**: View user ratings and reviews for movies and TV shows to help you make viewing decisions.
10. **Customization**: Personalize your profile with avatars and other customization options.
11. **Recommendations**: Get personalized movie recommendations based on your viewing history.
12. **Error Handling**: Graceful error handling with a 404 page for a smooth user experience.
13. **Fast Loading**: Utilizes Vite for quick development and build times, making the app snappy and responsive.
14. **State Management**: Redux Toolkit and React Redux are used for efficient state management, ensuring a seamless user experience.
15. **Environmental Configuration**: Utilizes the dotenv library for environment variable management, making it easy to handle sensitive information. <br/>

**Additionally, MovieHub web app features:**<br/>
16. **Skeleton Loading**: Experience fast and smooth loading of content with skeleton loading while data is being fetched from the TMDB API.<br/>
17.**Lazy Image Loading**: Optimized image loading for faster page loading and improved performance.<br/>
18. **Infinite Scrolling**: Endless scrolling on certain pages for convenient browsing without the need for pagination.

## Technologies Used
- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast, lightweight development build tool that provides blazing-fast development server and builds.
- **React Redux**: The official library for integrating React with Redux, enabling state management in your application.
- **Redux Toolkit**: A set of tools and conventions for efficient state management in React applications.
- **TMDB API**: The Movie Database API provides access to a vast catalog of movies and TV shows.
- **Axios**: A promise-based HTTP client for making asynchronous HTTP requests.
- **Dayjs**: A library for handling date and time formatting in your application.
- **dotenv**: A library for managing environment variables in your development and production environments.
- **React Circular Progressbar**: Used for visually appealing progress indicators in your app.
- **React Icons**: Provides a wide range of icons for use in your user interface.
- **React Infinite Scroll Component**: Enables endless scrolling capabilities, enhancing the user experience.
- **React Lazy Load Image Component**: Optimizes image loading and overall performance by loading images only when they are in the viewport.
- **React Player**: Used for seamless media playback within your web app.
- **React Router DOM**: A popular library for handling navigation and routing in your web app.
- **Sass**: A CSS extension language used to style your web app with enhanced features and modularity.

## Folder Structure
📦moviehub<br/>
 ┣ 📂public<br/>
 ┃ ┗ 📜logo.png<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂assets<br/>
 ┃ ┃ ┣ 📜avatar.png<br/>
 ┃ ┃ ┣ 📜logo.png<br/>
 ┃ ┃ ┣ 📜no-poster.png<br/>
 ┃ ┃ ┗ 📜no-results.png<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┃ ┣ 📂carousel<br/>
 ┃ ┃ ┃ ┣ 📜Carousel.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂circleRating<br/>
 ┃ ┃ ┃ ┣ 📜CircleRating.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂contentWrapper<br/>
 ┃ ┃ ┃ ┣ 📜ContentWrapper.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂footer<br/>
 ┃ ┃ ┃ ┣ 📜Footer.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂genres<br/>
 ┃ ┃ ┃ ┣ 📜Genres.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂header<br/>
 ┃ ┃ ┃ ┣ 📜Header.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂lazyLoadImage<br/>
 ┃ ┃ ┃ ┗ 📜Img.jsx<br/>
 ┃ ┃ ┣ 📂movieCard<br/>
 ┃ ┃ ┃ ┣ 📜MovieCard.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂spinner<br/>
 ┃ ┃ ┃ ┣ 📜Spinner.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂switchTabs<br/>
 ┃ ┃ ┃ ┣ 📜style.scss<br/>
 ┃ ┃ ┃ ┗ 📜SwitchTabs.jsx<br/>
 ┃ ┃ ┗ 📂videoPopup<br/>
 ┃ ┃ ┃ ┣ 📜style.scss<br/>
 ┃ ┃ ┃ ┗ 📜VideoPopup.jsx<br/>
 ┃ ┣ 📂hooks<br/>
 ┃ ┃ ┗ 📜useFetch.jsx<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┃ ┣ 📂404<br/>
 ┃ ┃ ┃ ┣ 📜PageNotFound.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂details<br/>
 ┃ ┃ ┃ ┣ 📂carousels<br/>
 ┃ ┃ ┃ ┃ ┣ 📜Recommendation.jsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜Similar.jsx<br/>
 ┃ ┃ ┃ ┣ 📂cast<br/>
 ┃ ┃ ┃ ┃ ┣ 📜Cast.jsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┃ ┣ 📂detailsBanner<br/>
 ┃ ┃ ┃ ┃ ┣ 📜DetailsBanner.jsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┃ ┣ 📂videosSection<br/>
 ┃ ┃ ┃ ┃ ┣ 📜style.scss<br/>
 ┃ ┃ ┃ ┃ ┗ 📜VideosSection.jsx<br/>
 ┃ ┃ ┃ ┣ 📜Details.jsx<br/>
 ┃ ┃ ┃ ┣ 📜Playbtn.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂explore<br/>
 ┃ ┃ ┃ ┣ 📜Explore.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┣ 📂home<br/>
 ┃ ┃ ┃ ┣ 📂heroBanner<br/>
 ┃ ┃ ┃ ┃ ┣ 📜HeroBanner.jsx<br/>
 ┃ ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┃ ┃ ┣ 📂popular<br/>
 ┃ ┃ ┃ ┃ ┗ 📜Popular.jsx<br/>
 ┃ ┃ ┃ ┣ 📂topRated<br/>
 ┃ ┃ ┃ ┃ ┗ 📜TopRated.jsx<br/>
 ┃ ┃ ┃ ┣ 📂trending<br/>
 ┃ ┃ ┃ ┃ ┣ 📜style.scss<br/>
 ┃ ┃ ┃ ┃ ┗ 📜Trending.jsx<br/>
 ┃ ┃ ┃ ┗ 📜Home.jsx<br/>
 ┃ ┃ ┗ 📂searchResult<br/>
 ┃ ┃ ┃ ┣ 📜SearchResult.jsx<br/>
 ┃ ┃ ┃ ┗ 📜style.scss<br/>
 ┃ ┣ 📂store<br/>
 ┃ ┃ ┣ 📜homeSlice.js<br/>
 ┃ ┃ ┗ 📜store.js<br/>
 ┃ ┣ 📂utils<br/>
 ┃ ┃ ┗ 📜api.js<br/>
 ┃ ┣ 📜App.jsx<br/>
 ┃ ┣ 📜index.scss<br/>
 ┃ ┣ 📜main.jsx<br/>
 ┃ ┗ 📜mixins.scss<br/>
 ┣ 📜.env<br/>
 ┣ 📜index.html<br/>
 ┗ 📜README.md<br/>

 ## License
This project is licensed under the [MIT License](LICENSE).

## Demo
## Home Page
![home1](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/a79f09b3-28b7-439a-8785-e5529d8bd504)
![home2](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/19ed88ef-2b70-4b73-bb1b-093d96355d62)
## Search Page
![search1](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/afd8d678-64cf-4fa5-b220-121388e86308)
## Skeleton Loading
![SkeletonLoading](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/c9ce039f-f5b4-4660-abb5-41691f5efbf2)
## Detail Page
![detail1](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/9e602282-e063-401b-b891-0bcd09146118)
![detail2](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/a24d2e8e-9791-441f-8043-01e214b907de)
![detail3](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/585929ea-a5ef-4de1-a6a5-4d20c2edbf1f)
## Explore Page
![explore1](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/3b12b908-e45c-4171-9ebf-08b6ca45b870)
## 404 Page
![404](https://github.com/erpankajk4/MovieHub---React-Redux-SCSS/assets/118353291/cda47709-8412-483f-98a3-b64ff7886ade)
