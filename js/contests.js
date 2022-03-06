let contests = document.querySelector("#contests");

const contestsArr = [
  {
    id: 1,
    contest: "Leetcode Biweekly Contest 71",
    rank: [5745, 16927],
    name: "sacden",
    score: "7/18",
    finishTime: "0:48:04",
    url: "https://leetcode.com/contest/biweekly-contest-71/ranking/305/",
  },
  {
    id: 2,
    contest: "Leetcode Weekly Contest 279",
    rank: [10116, 18838],
    name: "sacden",
    score: "7/18",
    finishTime: "1:37:09",
    url: "https://leetcode.com/contest/weekly-contest-279/ranking/405/",
  },
  {
    id: 3,
    contest: "Leetcode Biweekly Contest 72",
    rank: [12485, 18641],
    name: "sacden",
    score: "4/18",
    finishTime: "0:39:32",
    url: "https://leetcode.com/contest/biweekly-contest-72/ranking/500/",
  },
  {
    id: 4,
    contest: "Leetcode Weekly Contest 281",
    rank: [12844, 20119],
    name: "sacden",
    score: "3/18",
    finishTime: "0:12:46",
    url: "https://leetcode.com/contest/weekly-contest-281/ranking/348/",
  },
  {
    id: 5,
    contest: "Leetcode Biweekly Contest 73",
    rank: [10253, 18529],
    name: "sacden",
    score: "3/18",
    finishTime: "0:33:13",
    url: "https://leetcode.com/contest/biweekly-contest-73/ranking/411/",
  },
  {
    id: 6,
    contest: "Leetcode Weekly Contest 283",
    rank: [13572, 21847],
    name: "sacden",
    score: "3/18",
    finishTime: "0:45:23",
    url: "https://leetcode.com/contest/weekly-contest-283/ranking/543/",
  },
];

const getcontests = (contestsArr) =>
  contestsArr
    .sort((a, b) => a.rank[0] - b.rank[0])
    .map(
      (el) => `
      <tr>
        <td><span class="contest-rank">${el.rank[0]} </span>/ ${el.rank[1]} </td>
        <td><a href="${el.url}" target="_blank" id="contestsLink">${el.contest}</a></td>
        <td><a href="https://leetcode.com/sacden/" target="_blank" id="contestsLink" >${el.name}</a></td>
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
    <div class="table-round">
    <table class="table table-dark table-striped">
    <thead>
    <tr>
      <th scope="col" class="contest-header">Rank / Total</th>
      <th scope="col" class="contest-header">Contest</th>
      <th scope="col" class="contest-header">Name</th>
      <th scope="col" class="contest-header">Score</th>
      <th scope="col" class="contest-header">Finish Time</th>
    </tr>
  </thead>
  <tbody>
    ${getcontests(contestsArr)}
    </tbody>
    </table>
    </div>
    <div class="contests row row-cols-2 row-cols-md-1 gy-4">
      <div class="accordion accordion-flush">
        <div class="row row-cols-md-1" id="allcontests"></div>
      </div>
    </div>
  </div>`
);
