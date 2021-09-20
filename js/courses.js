let coursesEl = document.querySelector("#courses");

const coursesArr = [
  {
    id: "headingTwelve",
    dataTarget: "collapseTwelve",
    name: "Javascript/Front-End Program",
    author: "Rolling Scopes School",
    duration: "6 months",
    image: "./courses/rsschool.jpg",
    url: "https://rs.school/",
  },
  {
    id: "headingEleven",
    dataTarget: "collapseEleven",
    name: "JavaScript Frontend Developer",
    author: "Vladilen Minin",
    duration: "3,5 months",
    image: "./courses/vladilen-minin.jpg",
    url: "https://vladilen.ru/junior",
  },
  {
    id: "headingTen",
    dataTarget: "collapseTen",
    name: "Modern React with Redux",
    author: "Stephen Grider",
    duration: "52 hours",
    image: "./courses/stephen-grider.jpeg",
    url: "https://www.udemy.com/course/react-redux/",
  },
  {
    id: "headingNine",
    dataTarget: "collapseNine",
    name: "The Complete React Developer Course",
    author: "Andrew Mead",
    duration: "39 hours",
    image: "./courses/andrew-mead.jpeg",
    url: "https://www.udemy.com/course/react-2nd-edition/",
  },
  {
    id: "headingEight",
    dataTarget: "collapseEight",
    name: "React Front to Back",
    author: "Brad Traversy",
    duration: "14 hours",
    image: "./courses/brad-traversy.jpeg",
    url: "https://www.udemy.com/course/modern-react-front-to-back/",
  },
  {
    id: "headingSeven",
    dataTarget: "collapseSeven",
    name: "Typescript The Complete Developer's Guide",
    author: "Stephen Grider",
    duration: "14 hours",
    image: "./courses/stephen-grider2.jpeg",
    url: "https://www.udemy.com/course/typescript-the-complete-developers-guide/",
  },
  {
    id: "headingSix",
    dataTarget: "collapseSix",
    name: "Build Responsive Real World Websites with HTML5 and CSS3",
    author: "Jonas Schmedtmann",
    duration: "37 hours",
    image: "./courses/jonas-schmedtmann.jpeg",
    url: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
  },
  {
    id: "headingFive",
    dataTarget: "collapseFive",
    name: "The Complete JavaScript Course 2021: From Zero to Expert!",
    author: "Jonas Schmedtmann",
    duration: "68 hours",
    image: "./courses/jonas-schmedtmann2.jpeg",
    url: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  {
    id: "headingFour",
    dataTarget: "collapseFour",
    name: "50 Projects In 50 Days - HTML, CSS & JavaScript",
    author: "Brad Traversy, Florin Pop",
    duration: "18 hours",
    image: "./courses/brad-traversy2.jpeg",
    url: "https://www.udemy.com/course/50-projects-50-days/",
  },
  {
    id: "headingThree",
    dataTarget: "collapseThree",
    name: "Git: Become an Expert in Git & GitHub in 4 Hours",
    author: "Jad Khalili",
    duration: "4 hours",
    image: "./courses/jad-khalili.jpeg",
    url: "https://www.udemy.com/course/git-expert-4-hours/",
  },
  {
    id: "headingTwo",
    dataTarget: "collapseTwo",
    name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    author: "Jonas Schmedtmann",
    duration: "28 hours",
    image: "./courses/jonas-schmedtmann3.jpeg",
    url: "https://www.udemy.com/course/advanced-css-and-sass/",
  },
  {
    id: "headingOne",
    dataTarget: "collapseOne",
    name: "The Advanced Web Developer Bootcamp",
    author: "Colt Steele, Elie Schoppik, Tim Garcia, Matt Lane",
    duration: "34 hours",
    image: "./courses/colt-steele.jpeg",
    url: "https://www.udemy.com/course/the-advanced-web-developer-bootcamp/",
  },
];

const getCourses = (coursesArr) =>
  coursesArr
    .map(
      (el) => `<div class="accordion-item">
<h2 class="accordion-header" id="${el.id}">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${el.dataTarget}" aria-expanded="false" aria-controls="${el.dataTarget}">
    ${el.name}
  </button>
</h2>
<div id="${el.dataTarget}" class="accordion-collapse collapse" aria-labelledby="${el.id}" data-bs-parent="#accordionExample">
  <div class="accordion-body">
  <div class="course-info-photo"><img src="${el.image}" class="card-img-top" alt="Modern React with Redux"/></div>
    <div class="course-info-item"><span>Author:</span><span class="grey"> ${el.author}</span></div>
    <div class="course-info-item"><span>Duration:</span><span class="grey"> ${el.duration}</span></div>
    <div class="course-info-item"><a href="${el.url}" class="card-link own-links yellow" target="_blank">Take a part in this course<i class="bi-arrow-right-short"></i></a></div>
  </div>
</div>
</div>
`
    )
    .join("");

coursesEl.insertAdjacentHTML("afterbegin", getCourses(coursesArr));
