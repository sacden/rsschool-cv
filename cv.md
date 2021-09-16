# Denis Shakhmaev

---

## Contact information:

---

**Phone:** +420 725 398 321<br>
**E-mail:** sacden2009@gmail.com<br>
**Telegram:** @JSDenis<br>
[LinkedIn](https://www.linkedin.com/in/denis-shakhmaev/)<br>
[GitHub](https://github.com/sacden)<br>

---

## About me:

---

Hi, i am an innovative Front-End Developer with 5 years experience building and maintaining responsive websites.
Proficient in HTML, CSS, JavaScript, as well as modern libraries and frameworks. Passionate about usability and possesses working knowledge of Adobe Photoshop.
I have:

- 1+ years of programming on React
- 2+ years of programming on Javascript
- 15+ years of graphic experience in Photoshop

---

## Skills:

---

### Tech stack

- React
- JavaScript
- HTML
- CSS
- Wordpress
- SQL

### Tools

- VS Code
- GIT
- Webflow
- Photoshop, Illustrator
- Target and SMM: Vk

---

## Code Example

---

**Nickname Generator:** _Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname. If the 3rd letter is a consonant, return the first 3 letters. If the 3rd letter is a consonant, return the first 3 letters. If the 3rd letter is a vowel, return the first 4 letters. If the string is less than 4 characters, return "Error: Name too short". Vowels are "aeiou", so discount the letter "y". Input will always be a string. Input will always have the first letter capitalised and the rest lowercase (e.g. Sam)_

```js
function nicknameGenerator(name) {
  const arr = ["a", "e", "i", "o", "u"];
  return name.length < 4 ? "Error: Name too short" : arr.includes(name.charAt(2)) ? name.split("").splice(0, 4).join("") : name.split("").splice(0, 3).join("");
}
```

---
