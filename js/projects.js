let projects = document.querySelector("#projects");

const projectsArr = [
  {
    name: "CRYPTOTRACKER",
    image: "./images/projects/cryptotracker_banner.jpg",
    description: "The app downloads all cryptocurrencies, shows price changes in charts for different periods",
    technologies: ["React Native"],
    projectUrl: "https://kpmg.com",
    gitHubUrl: "https://github.com/sacden/react-native-cryptotracker",
  },
  {
    name: "INSTAGRAM CLONE",
    image: "./images/projects/instagram_banner.jpg",
    description: "Basic functionalities of Instagram without backend. In a progress...",
    technologies: ["React Native", "Typescript"],
    projectUrl: "https://kpmg.com",
    gitHubUrl: "https://github.com/sacden/react-native-TS-instagram",
  },
  {
    name: "REACT ESHOP",
    image: "./images/projects/cryptotracker.png",
    description: "E-shop with electronics with some features as searching, filtering and sorting. In a progress...",
    technologies: ["React", "Redux"],
    projectUrl: "https://kpmg.com",
    gitHubUrl: "https://github.com/sacden/eshop",
  },
];

const getProjects = (projectsArr) =>
  projectsArr
    .map(
      (el) => `
      <div class="card" style="width: 18rem; ">
      
      <a href="${el.gitHubUrl}" class="card-link own-links yellow aligncenter project-link" target="_blank">${el.name}</a>
  <img src=${el.image} class="card-img-projects"  alt=${el.name}>
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
