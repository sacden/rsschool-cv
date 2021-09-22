const footerEl = document.querySelector("#footer");
footerEl.insertAdjacentHTML(
  "afterbegin",
  `
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
      @2021 <a href="https://rs.school/js"><img src="./icons/rs-logo.png" alt="rs-school" width="80" /></a> <a href="https://github.com/sacden/" target="_blank" class="own-links">GitHub</a>
    </div>
  </div>
</div>
`
);
