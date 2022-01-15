const banner = document.querySelector("#banner");

banner.insertAdjacentHTML(
  "afterbegin",
  `
  <div class="container">
  <div class="row row-cols-1  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
  <h6 class="hidden">Banner</h6>
  <div class="bannerContainer">
      <div class="bannersidebar">
        <div style="background: linear-gradient(229.99deg, #23232d -26%, #2d2d38 145%)">
          <h1 id="banner_header">INSTAGRAM CLONE</h1>
          <span class="gray-banner">React Native</span>
        </div>
        <div style="background: linear-gradient(215.32deg, #2d2d38 -1%, #23232d 124%)">
        <h1 id="banner_header">CRYPTOTRACKER</h1>
        <span class="gray-banner">React Native, Typescript</span>
        </div>
        <div style="background: linear-gradient(221.87deg, #23232d 1%, #2d2d38 128%)">
        <h1 id="banner_header">REACT ESHOP</h1>
          <span class="gray-banner">React, Redux</span>
        </div>
      </div>
      <div class="main-slide">
        <div
          style="
            background-image: url('./images/projects/instagram_banner.jpg');
          "
        ></div>
        <div
          style="
          background-image: url('./images/projects/cryptotracker_banner.jpg');
          "
        ></div>
        <div
          style="
          background-image: url('./images/projects/instagram_banner.jpg');
          "
        ></div>

      </div>
      <div class="controls">
        <button class="banner-button down-button">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="banner-button up-button">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
    </div>
    </div>
  
`
);
