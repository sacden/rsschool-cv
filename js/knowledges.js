let knowledgeEl = document.querySelector("#knowledge");

const knowledgeArr = [
  { technology: "JS", percent: 80 },
  { technology: "React", percent: 75 },
  { technology: "Redux", percent: 70 },
  { technology: "Typescript", percent: 70 },
  { technology: "HTML", percent: 100 },
  { technology: "CSS", percent: 75 },
];

const getKnowledges = (knowledgeArr) =>
  knowledgeArr
    .map(
      (el) => `
<div class="knowledge-item">
<span>${el.technology}</span>
<span>${el.percent}%</span>
</div>
<div class="progress progress-own">
<div class="progress-bar bg-warning" role="progressbar" style="width: ${el.percent}%" aria-valuenow="${el.percent}" aria-valuemin="0" aria-valuemax="100"></div>
</div>
`
    )
    .join("");

knowledgeEl.insertAdjacentHTML("afterbegin", `  <h6 class="hidden">Knowledges</h6>${getKnowledges(knowledgeArr)} <div class="divider"></div>`);
