const navigation = document.querySelector("#navigation");
localStorage.setItem("theme", "light");
function myFunction() {
  var element = document.body;
  element.classList.value === "light" ? element.classList.replace("light", "dark") : element.classList.replace("dark", "light");

  element.classList.value === "light" ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");

  console.log(localStorage.getItem("theme"));
}
navigation.insertAdjacentHTML(
  "afterbegin",
  `<h4 class="hidden">navigation</h4>
  <div class="container">
  <div style="display: flex; justify-content: space-between;">
  <div>
  <nav aria-label="breadcrumb justify-content-center">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#experienceNav" class="own-links own-nav">Work experience</a></li>
      <li class="breadcrumb-item"><a href="#projectsNav" class="own-links own-nav">My projects</a></li>
      <li class="breadcrumb-item"><a href="#educationNav" class="own-links own-nav">Education</a></li>
      <li class="breadcrumb-item"><a href="#certificationNav" class="own-links own-nav">Certifications</a></li>
      <li class="breadcrumb-item"><a href="#coursesNav" class="own-links own-nav">Courses</a></li>
      <li class="breadcrumb-item"><a href="#contestsNav" class="own-links own-nav">Contests</a></li>
    </ul>
  </nav>
  </div>
  <div>
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onclick="myFunction()">
</div>
</div>
</div>
</div>
 `
);

{
  /* <li style="float: right"> <div class="form-check form-switch">
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onclick="myFunction()">
</div></li> */
}
