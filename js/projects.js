let projects = document.querySelector("#projects");

// window.addEventListener("storage", () => {
//   // When local storage changes, dump the list to
//   // the console.
//   console.log(JSON.parse(window.localStorage.getItem("theme")));
// });

const projectsArr = [
  {
    name: "CRYPTOTRACKER",
    image: "./images/projects/cryptotracker_banner.jpg",
    imageDark: "./images/projects/cryptotracker-banner-dark.png",
    imageLight: "./images/projects/cryptotracker-banner-light.png",
    description: "The app downloads all cryptocurrencies, shows price changes in charts for different periods",
    technologies: ["React Native"],
    projectUrl: "https://kpmg.com",
    gitHubUrl: "https://github.com/sacden/react-native-cryptotracker",
  },
  {
    name: "INSTAGRAM CLONE",
    imageDark: "./images/projects/instagram-banner-dark.png",
    imageLight: "./images/projects/instagram-banner-light.png",
    description: "Basic functionalities of Instagram without backend. In a progress...",
    technologies: ["React Native", "Typescript"],
    projectUrl: "https://kpmg.com",
    gitHubUrl: "https://github.com/sacden/react-native-TS-instagram",
  },
  // ,
  // {
  //   name: "REACT ESHOP",
  //   imageDark: "./images/projects/instagram-banner-dark.png",
  //   imageLight: "./images/projects/progress-light.png",
  //   description: "E-shop with electronics with some features as searching, filtering and sorting. In a progress...",
  //   technologies: ["React", "Redux"],
  //   projectUrl: "https://kpmg.com",
  //   gitHubUrl: "https://github.com/sacden/eshop",
  // },
  {
    name: "FULLSTACK APP",
    imageDark: "./images/projects/react-movies-light.png",
    imageLight: "./images/projects/react-movies-light.png",
    description: "Searching movies from open API. Fullstack application",
    technologies: ["React", "NodeJS", "Express", "Redis", "Bootstrap"],
    projectUrl: "",
    gitHubUrl: "https://github.com/sacden/react-movies/",
  },
];

const getProjects = (projectsArr) =>
  projectsArr
    .map(
      (el) => `
      <div class="card" style="width: 18rem; ">
      
      <a href="${el.gitHubUrl}" class="card-link own-links yellow aligncenter project-link" target="_blank">${el.name}</a>
      <a href="${el.gitHubUrl}" target="_blank"><img src=${localStorage.getItem("theme") === "light" ? el.imageLight : el.imageDark} class="card-img-url card-img-projects"  alt=${el.name}></a>
  <div class="card-body">
    <p class="card-text">${el.description}</p>
  </div>
  <h5 class="card-title-projects">
  ${el.technologies
    .map((item) => {
      return `<div class="card-technologies">${item}</div>`;
    })
    .join("")}
    </h5>
 
  
</div>`
    )
    .join("");

projects.insertAdjacentHTML(
  "afterbegin",
  `
<div class="container">
<h3><a href="#" id="projectsNav" class="own-links">MY PROJECTS ON GITHUB</a></h3>
<div class="row row-cols-1 row-cols-lg-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 g-3" id="allprojects">${getProjects(projectsArr)}</div>
</div>`
);
