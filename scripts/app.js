const projects = [
    {
        title: "Weather App",
        description: `This simple yet powerful web app lets you check the current weather of any city in the world. The app fetches real-time data from the OpenWeatherMap API and displays the temperature, weather conditions, and an icon representing the weather.

With a sleek and minimalistic design inspired by retro themes, this app is a fun way to interact with JavaScript and APIs while learning about asynchronous programming, DOM manipulation, and more.`,
        liveLink: "https://alfosei.github.io/weather-app",
        repoLink: "https://github.com/alfosei/weather-app"
    },
    {
        title: "Movie Search App",
        description: `Movie Search App, a simple web application that allows users to search for movies and view detailed information about their favorite films. The app fetches data from the OMDB API and displays search results in a visually appealing, minimalistic design.`,
        liveLink: "https://alfosei.github.io/movie-search-app",
        repoLink: "https://github.com/alfosei/movie-search-app"
    },
    {
        title: "Todo App",
        description: "A simple todo application made with REACT",
        liveLink: "https://alfosei.github.io/react-todolist-app",
        repoLink: "https://github.com/alfosei/react-todolist-app"
    },
    
    // Add more projects here
];

const projectContainer = document.querySelector(".project-container");

projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";
    projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.liveLink}" target="_blank">Live Demo</a> |
        <a href="${project.repoLink}" target="_blank">Source Code</a>
    `;
    projectContainer.appendChild(projectElement);
});

