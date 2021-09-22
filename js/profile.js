const profileEl = document.querySelector("#profile");
profileEl.insertAdjacentHTML(
  "afterbegin",
  `         <section class="about text-center">
<div class="logo"><img src="./images/avatar.png" alt="Denis Shakhmaev" width="100" height="100" /></div>

<div class="name">
  <a href="" class="own-links"><h1>Denis Shakhmaev</h1></a>
</div>
<div class="position">Front-End developer</div>
</section>
<section class="basic-info">
<h6 class="hidden">basic info</h6>
<div class="basic-info-item">
  <span>Residence:</span>
  <span class="grey"> Czech Republic</span>
</div>
<div class="basic-info-item">
  <span>City:</span>
  <span class="grey"> Prague</span>
</div>
<div class="basic-info-item">
  <span>Age:</span>
  <span class="grey"> 35</span>
</div>
</section>
<div class="divider"></div>`
);
