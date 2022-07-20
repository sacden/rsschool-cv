let certificates = document.querySelector("#certificates");

const certificatesArr = [
  {
    name: "SALESFORCE",
    img: "./images/certifications/b2c-commerce-developer.png",
    period: "2022",
    description: "B2C COMMERCE DEVELOPER",
  },
];

const getCertifications = (certificatesArr) =>
  certificatesArr
    .map(
      (el) => `<div class="card">
        <div class="card-body">
          <h5 class="card-title"><span>${el.description}</span><span class="card-date">${el.period}</span></h5>
          <img src=${el.img} class="card-certification"  alt=${el.name}></a>
        </div>
      </div>`
    )
    .join("");

certificates.insertAdjacentHTML(
  "afterbegin",
  `<div class="container">
<h3>
  <a href="#" id="certificationNav" class="own-links">
    CERTIFICATIONS
  </a>
</h3>
<div class="row row-cols-1 row-cols-lg-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 g-3" id="alleducation" style="justify-content: space-between">${getCertifications(certificatesArr)}</div>
</div>`
);
