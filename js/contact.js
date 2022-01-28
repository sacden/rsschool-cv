const contact = document.querySelector(".contact");

contact.insertAdjacentHTML(
  "afterbegin",
  `
  <h6 class="hidden">contact</h6>
  <ul class="clean">
    <li>
      <a href="https://www.linkedin.com/in/denis-shakhmaev/" target="_blank" class="own-links"><i class="bi-linkedin"></i></a>
    </li>
    <li>
      <a href="https://github.com/sacden/" target="_blank" class="own-links"><i class="bi-github"></i></a>
    </li>
    <li>
    <a href="https://leetcode.com/sacden/" target="_blank" class="own-links"><i class="bi bi-box-arrow-right"></i></a>
  </li>
    <li>
      <a href="https://www.codewars.com/users/sacden/" target="_blank" class="own-links"><i class="bi-flower1"></i></a>
    </li>
    <li>
      <a href="mailto:sacden2009@gmail.com" target="_blank" class="own-links"><i class="bi-envelope"></i></a>
    </li>
  </ul>
`
);
