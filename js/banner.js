const banner = document.querySelector("#banner");

const bannerArr = [
  {
    name: "CRYPTOTRACKER",
    technologies: "React Native, Typescript",
    gradient: "215.32deg, #2d2d38 -1%, #23232d 124%",
  },
  {
    name: "INSTAGRAM CLONE",
    technologies: "React Native",
    gradient: "229.99deg, #23232d -26%, #2d2d38 145%",
  },
];

// ,
//   {
//     name: "REACT ESHOP",
//     technologies: "React, Redux",
//     gradient: "221.87deg, #23232d 1%, #2d2d38 128%",
//   },
//   {
//     image: "progress-light.png",
//     url: "",
//   },

const imageArr = [
  {
    image: "instagram-banner-light.png",
    url: "./portfolio/index.html?id=0",
  },
  {
    image: "cryptotracker-banner-light.png",
    url: "",
  },
];
// `<div style="background: linear-gradient(${el.gradient})">
const createDescription = () => {
  return bannerArr
    .map(
      (el) =>
        `<div class="banner-gradient">
      <h1 id="banner_header">${el.name}</h1>
        <span class="gray-banner">${el.technologies}</span>
      </div>`
    )
    .join("");
};

const createImages = () => {
  return imageArr
    .map((el) => `<div style="background-image: url('./images/projects/${el.image}');"><a href="${el.url}" style="display:block; width:100% ;height:100%;" target="_blank">&nbsp;</a></div>`)
    .join("");
};

banner.insertAdjacentHTML(
  "afterbegin",
  `
  <div class="container">
  <div class="row row-cols-1  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
  <h6 class="hidden">Banner</h6>
  <div class="bannerContainer">
  <div class="bannersidebar">
  ${createDescription()}  
      </div>
      <div class="main-slide">
      ${createImages()}
      </div>
      <div class="controls">
        <button class="banner-button down-button">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="banner-button up-button">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
    </div>
    </div>
  
`
);
