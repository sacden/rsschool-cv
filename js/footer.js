const footerEl = document.querySelector("#footer");

footerEl.insertAdjacentHTML(
  "afterbegin",
  `
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" style="display: flex; align-items: center; justify-content: center">
      <div class="footer-logo-text">@2021</div> <div class="footer-logo"></div><div><a href="https://github.com/sacden/" target="_blank" class="own-links">&nbsp; GitHub</a></div>
    </div>
  </div>
</div>
`
);
