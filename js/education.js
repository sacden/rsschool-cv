let education = document.querySelector("#education");

const educationArr = [
  {
    name: "VSE",
    faculty: "Faculty of Informatics and Statistics",
    period: "2005 - 2009",
    description: "Prague University of Economics and Business",
    projectUrl: "https://www.vse.cz/",
  },
  {
    name: "SMVV",
    faculty: "Diplomatic and public relations",
    period: "2001 - 2004",
    description: "The School of International and Public Relations, Prague",
    projectUrl: "https://smvv.cz/",
  },
];

const getEducation = (educationArr) =>
  educationArr
    .map(
      (el) => `<div class="card">
        <div class="card-body">
          <h5 class="card-title"><span>${el.name}</span><span class="card-date">${el.period}</span></h5>
          <h6 class="card-subtitle mb-2 text-muted">${el.faculty}</h6>
          <p class="card-text">${el.description}</p>
          <a href="${el.projectUrl}" class="card-link own-links yellow" target="_blank">Go to the web<i class="bi-arrow-right-short"></i></a>
        </div>
      </div>`
    )
    .join("");

education.insertAdjacentHTML(
  "afterbegin",
  `<div class="container">
<h3>
  <a href="#" id="educationNav" class="own-links">
    EDUCATION
  </a>
</h3>
<div class="row row-cols-1 row-cols-lg-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 g-3" id="alleducation">${getEducation(educationArr)}</div>
</div>`
);
