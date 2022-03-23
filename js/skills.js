let skills = document.querySelector(".skills");

const skillsArr = [
  "Photoshop, Illustrator",
  "Visual Studio, Webstorm",
  "Webpack, Parcel",
  "Figma, Webflow",
  "GitCommit, GitHub",
  "Wordpress, Joomla",
  "Firebase, Postman",
  "Bootstrap, Sass",
  "AWS, Jira",
  "Agile, SCRUM",
];

const getSkills = (skillsArr) => skillsArr.map((el) => `<li><i class="bi-check"></i>${el}</li>`).join("");
skills.insertAdjacentHTML(
  "afterbegin",
  `<h6 class="hidden">Skills</h6>
<ul class="clean" id="skills">${getSkills(skillsArr)}</ul><div class="divider"></div>`
);
