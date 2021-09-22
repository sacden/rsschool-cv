const languages = document.querySelector("#languages");
languages.insertAdjacentHTML(
  "afterbegin",
  `<h6 class="hidden">Languages</h6>
  <div class="language-progress">
    <div class="progress-round hundred">
      <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
      <div class="progress-value">100%</div>
    </div>
  
    <div class="progress-round hundred">
      <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
      <div class="progress-value">100%</div>
    </div>
    <div class="progress-round sixty">
      <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
      <div class="progress-value">60%</div>
    </div>
  </div>
  <div class="lang text-center">Russian Czech English</div>
  <div class="divider"></div>`
);
