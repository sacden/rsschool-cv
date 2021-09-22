const navigation = document.querySelector("#navigation");
navigation.insertAdjacentHTML(
  "afterbegin",
  `<h4 class="hidden">navigation</h4>
  <nav aria-label="breadcrumb justify-content-center">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#experienceNav" class="own-links own-nav">Work experience</a></li>
      <li class="breadcrumb-item"><a href="#educationNav" class="own-links own-nav">Education</a></li>
      <li class="breadcrumb-item"><a href="#coursesNav" class="own-links own-nav">Courses</a></li>
      <li class="breadcrumb-item"><a href="#example" class="own-links own-nav">Code example</a></li>
    </ul>
  </nav>`
);
