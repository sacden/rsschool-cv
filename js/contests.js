let contests = document.querySelector("#contests");

const contestsArr = [
  {
    id: 1,
    contest: "Leetcode Biweekly Contest 71",
    rank: "7620 / 16927",
    name: "sacden",
    score: "7/18",
    finishTime: "0:48:04",
    url: "https://leetcode.com/contest/biweekly-contest-71/ranking/1/",
  },
  {
    id: 2,
    contest: "Leetcode Weekly Contest 279",
    rank: "10116 / 18838",
    name: "sacden",
    score: "7/18",
    finishTime: "1:37:09",
    url: "https://leetcode.com/contest/weekly-contest-279/ranking/",
  },
];

const getcontests = (contestsArr) =>
  contestsArr
    .map(
      (el, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td><a href="${el.url}" target="_blank" class="own-links">${el.contest}</a></td>
        <td>${el.rank}</td>
        <td><a href="https://leetcode.com/sacden/" target="_blank" class="own-links">${el.name}</a></td>
        <td>${el.score}</td>
        <td>${el.finishTime}</td>
      </tr>
`
    )
    .join("");

contests.insertAdjacentHTML(
  "afterbegin",
  `         <div class="container">
    <h3><a href="#" id="contestsNav" class="own-links">CONTESTS</a></h3>
    <table class="table table-dark table-striped">
    <thead>
    <tr>
      <th scope="col" class="contest-header">#</th>
      <th scope="col" class="contest-header">Contest</th>
      <th scope="col" class="contest-header">Rank</th>
      <th scope="col" class="contest-header">Name</th>
      <th scope="col" class="contest-header">Score</th>
      <th scope="col" class="contest-header">Finish Time</th>
    </tr>
  </thead>
  <tbody>
    ${getcontests(contestsArr)}
    </tbody>
    </table>
    <div class="contests row row-cols-2 row-cols-md-1 gy-4">
      <div class="accordion accordion-flush">
        <div class="row row-cols-md-1" id="allcontests"></div>
      </div>
    </div>
  </div>`
);
