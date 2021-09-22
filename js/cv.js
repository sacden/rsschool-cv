const cv = document.querySelector(".download-cv ");
cv.insertAdjacentHTML(
  "afterbegin",
  `
  <h6 class="hidden">download cv</h6>
  <div>
    <a href="./cv/CV_Denis_Shakhmaev_EN.pdf" target="_blank" class="own-links">DOWNLOAD CV <i class="bi-download"></i></a>
  </div>
`
);
