# MovieHub

![Web App Screenshot](url_to_screenshot_or_image)

## Hosted Link on Netlify
https://shopyshop-redux.netlify.app - Click the Link to Preview <br/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c8ecddc-7bf5-45d3-8f79-df5d8485a808/deploy-status)](https://app.netlify.com/sites/shopyshop-redux/deploys) <br/>

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Usage](#usage)
   - [Example](#example)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

## Getting Started

Provide instructions on how to set up and run your web app locally. This section should include information on prerequisites and installation.

### Prerequisites

List any software, tools, or libraries that users need to have installed before running your web app. For example:

- [Node.js](https://nodejs.org/) (v14.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-web-app.git
   ```

2. Navigate to the project directory:
   ```
   cd moviehub
   ```
3. Install the project dependencies:

```
npm install
```
4. Start the development server:
```
npm start
```
Your web app should now be running locally. Open your web browser and access it at http://localhost:3000 or the port specified in your app.

## Features
**Moviehub** offers a range of features that enhance your movie and entertainment experience. Here are some of the key features:
1. **Browse a Vast Library**: Explore a vast library of movies and TV shows from various genres.
2. **Interactive User Interface**: A user-friendly and interactive interface for easy navigation and content discovery.
3. **Home Page**: The home page features dynamic sections such as trending movies, popular titles, and top-rated content to keep you updated on the latest releases.
4. **Details Page**: Dive deep into the details of your favorite movies and shows, including cast information, videos, and recommendations.
5. **Search Functionality**: A robust search feature that allows you to find specific movies, shows, or actors easily.
6. **Video Playback**: Seamless video playback with controls for play, pause, volume, and full-screen mode.
7. **Responsive Design**: The app is designed to be responsive, ensuring a great user experience on both desktop and mobile devices.
8. **Genre Filter**: Filter content by genre to find movies and shows that match your preferences.
9. **User Ratings**: View user ratings and reviews for movies and TV shows to help you make viewing decisions.
10. **Customization**: Personalize your profile with avatars and other customization options.
11. **Recommendations**: Get personalized movie recommendations based on your viewing history.
12. **Error Handling**: Graceful error handling with a 404 page for a smooth user experience.
13. **Fast Loading**: Utilizes Vite for quick development and build times, making the app snappy and responsive.
14. **State Management**: Redux Toolkit and React Redux are used for efficient state management, ensuring a seamless user experience.
15. **Environmental Configuration**: Utilizes the dotenv library for environment variable management, making it easy to handle sensitive information.
Additionally, MovieHub web app features:
16 **Skeleton Loading**: provides a temporary, skeleton-like UI while content is loading, enhancing the user experience and perceived performance.
17 **Lazy Image Loading**: Optimized image loading for faster page loading and improved performance.
18 **Infinite Scrolling**: Endless scrolling on certain pages for convenient browsing without the need for pagination.

## Technologies Used
- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast, lightweight development build tool that provides blazing-fast development server and builds.
- **React Redux**: The official library for integrating React with Redux, enabling state management in your application.
- **Redux Toolkit**: A set of tools and conventions for efficient state management in React applications.
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
📦moviehub
 ┣ 📂public
 ┃ ┗ 📜logo.png
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜avatar.png
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┣ 📜no-poster.png
 ┃ ┃ ┗ 📜no-results.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂carousel
 ┃ ┃ ┃ ┣ 📜Carousel.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂circleRating
 ┃ ┃ ┃ ┣ 📜CircleRating.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂contentWrapper
 ┃ ┃ ┃ ┣ 📜ContentWrapper.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂genres
 ┃ ┃ ┃ ┣ 📜Genres.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂lazyLoadImage
 ┃ ┃ ┃ ┗ 📜Img.jsx
 ┃ ┃ ┣ 📂movieCard
 ┃ ┃ ┃ ┣ 📜MovieCard.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂spinner
 ┃ ┃ ┃ ┣ 📜Spinner.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂switchTabs
 ┃ ┃ ┃ ┣ 📜style.scss
 ┃ ┃ ┃ ┗ 📜SwitchTabs.jsx
 ┃ ┃ ┗ 📂videoPopup
 ┃ ┃ ┃ ┣ 📜style.scss
 ┃ ┃ ┃ ┗ 📜VideoPopup.jsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useFetch.jsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂404
 ┃ ┃ ┃ ┣ 📜PageNotFound.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂details
 ┃ ┃ ┃ ┣ 📂carousels
 ┃ ┃ ┃ ┃ ┣ 📜Recommendation.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Similar.jsx
 ┃ ┃ ┃ ┣ 📂cast
 ┃ ┃ ┃ ┃ ┣ 📜Cast.jsx
 ┃ ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┃ ┣ 📂detailsBanner
 ┃ ┃ ┃ ┃ ┣ 📜DetailsBanner.jsx
 ┃ ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┃ ┣ 📂videosSection
 ┃ ┃ ┃ ┃ ┣ 📜style.scss
 ┃ ┃ ┃ ┃ ┗ 📜VideosSection.jsx
 ┃ ┃ ┃ ┣ 📜Details.jsx
 ┃ ┃ ┃ ┣ 📜Playbtn.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂explore
 ┃ ┃ ┃ ┣ 📜Explore.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📂heroBanner
 ┃ ┃ ┃ ┃ ┣ 📜HeroBanner.jsx
 ┃ ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┃ ┃ ┣ 📂popular
 ┃ ┃ ┃ ┃ ┗ 📜Popular.jsx
 ┃ ┃ ┃ ┣ 📂topRated
 ┃ ┃ ┃ ┃ ┗ 📜TopRated.jsx
 ┃ ┃ ┃ ┣ 📂trending
 ┃ ┃ ┃ ┃ ┣ 📜style.scss
 ┃ ┃ ┃ ┃ ┗ 📜Trending.jsx
 ┃ ┃ ┃ ┗ 📜Home.jsx
 ┃ ┃ ┗ 📂searchResult
 ┃ ┃ ┃ ┣ 📜SearchResult.jsx
 ┃ ┃ ┃ ┗ 📜style.scss
 ┃ ┣ 📂store
 ┃ ┃ ┣ 📜homeSlice.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜api.js
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.scss
 ┃ ┣ 📜main.jsx
 ┃ ┗ 📜mixins.scss
 ┣ 📜.env
 ┣ 📜index.html
 ┗ 📜README.md