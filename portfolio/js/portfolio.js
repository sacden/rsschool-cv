let portfolio = document.querySelector("#portfolio");
let id = new URL(document.location).searchParams.get("id");
const portfolioArr = [["Instagram Clone", ["Home", "Profile", "Search"], [1, 2, 3]]];

const getPortfolio = (portfolioArr) => {
  return [...Array(3)]
    .map(
      (_, index) => `<div class="swiper-slide showcase-carousel__item">
      <div class="showcase-carousel__image-wrapper">
        <div class="showcase-carousel__image-left">
          <div class="showcase-carousel__image" style="background-image: url(images/${portfolioArr[id][2][index]}.png);"></div>
        </div>
        <div class="showcase-carousel__image-right">
          <div class="showcase-carousel__image" style="background-image: url(images/${portfolioArr[id][2][index]}.png);"></div>
        </div>
      </div>
      <p>${portfolioArr[id][1][index]}</p>
    </div>`
    )
    .join("");
};

portfolio.insertAdjacentHTML(
  "afterbegin",
  `<h2 class="showcase__header"><span>${portfolioArr[id][0]}</span></h2>

  <div class="showcase__content-wrapper">
    <div class="showcase__content">

      <div class="showcase-carousel">

        <div class="swiper-wrapper">

        ${getPortfolio(portfolioArr)}

        </div>

      </div>

      <div class="showcase-navigation">
        <div class="showcase-navigation__prev"></div>
        <div class="showcase-navigation__next"></div>
      </div>

    </div>
  </div>`
);
