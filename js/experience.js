let experience = document.querySelector("#experience");

const experienceArr = [
  {
    name: "KPMG",
    position: "Front-end Developer",
    period: "Dec 2021 – now",
    description: "Development of mobile applications and web sites. Tech Stack: React, React Native, Redux, Typescript, AWS",
    projectUrl: "https://kpmg.com",
  },
  {
    name: "Bangerhead",
    position: "Front-end Developer",
    period: "Feb 2021 – Jun 2021",
    description: "This is a small project that aims to increase buying power by adding gamification to the main website",
    projectUrl: "https://bangerhead.se/",
  },
  {
    name: "Sunnytrips",
    position: "React Developer",
    period: "Jan 2021 – Feb 2021",
    description: "A commercial own project created for lovers of outdoor activities in the Czech Republic",
    projectUrl: "https://sunnytrips.cz/",
  },
  {
    name: "STOCK Plzeň - Božkov s.r.o.",
    position: "IT Specialist",
    period: "Jan 2016 – Jul 2021",
    description: "IT support for local bussiness projects",
    projectUrl: "https://stock.cz/",
  },
  {
    name: "WEBFACTOR",
    position: "Web Developer",
    period: "Jan 2014 – Dec 2018",
    description: "Developed websites and landing pages for digital marketing needs",
    projectUrl: "https://bangerhead.se/",
  },
  {
    name: "RSVK",
    position: "Web Developer",
    period: "Jan 2009 – Mar 2015",
    description: "Created and supported a web site based on Wordpress",
    projectUrl: "https://www.rsvk.cz/",
  },
];

const getExperience = (experienceArr) =>
  experienceArr
    .map(
      (el) => `<div class="card">
        <div class="card-body">
          <h5 class="card-title"><span>${el.name}</span><span class="card-date">${el.period}</span></h5>
          <h6 class="card-subtitle mb-2 text-muted">${el.position}</h6>
          <p class="card-text">${el.description}</p>
          <a href="${el.projectUrl}" class="card-link own-links yellow" target="_blank">Go to the web<i class="bi-arrow-right-short"></i></a>
        </div>
      </div>`
    )
    .join("");

experience.insertAdjacentHTML(
  "afterbegin",
  `
<div class="container">
<h3><a href="#" id="experienceNav" class="own-links">WORK EXPERIENCE</a></h3>
<div class="row row-cols-1 row-cols-lg-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 g-3" id="allexperience">${getExperience(experienceArr)}</div>
</div>`
);
