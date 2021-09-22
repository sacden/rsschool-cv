const exampleEl = document.querySelector("#example");
exampleEl.insertAdjacentHTML(
  "afterbegin",
  `<div class="container">
            <h3><a href="#" id="example" class="own-links">CODE EXAMPLE</a></h3>
            <div class="row row-cols-1 row-cols-lg-1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 g-3">
              <div class="bd-callout">
                <div class="bd-callout-warning">
                  <div><span style="color: #cb444a">function </span><span style="color: #f6c344">disemvowel </span> (<span style="color: #cb444a">str</span>) {</div>
                  <div>
                    <span style="color: #cb444a">const </span><span style="color: #f6c344">arr </span> = [<span style="color: #3a704e">'a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U'</span>]
                  </div>

                  <div>
                    <span style="color: #cb444a">return</span> str. split(<span style="color: #3a704e"> '</span>). map(<span style="color: #f6c344">el</span> => el. split(<span
                      style="color: #3a704e"
                      >''</span
                    >). filter(<span style="color: #f6c344">x</span> => !arr. includes(x)). join(<span style="color: #3a704e">''</span>)). join(<span style="color: #3a704e">' '</span>)
                  </div>
                  <div>}</div>
                </div>
              </div>
            </div>
          </div>`
);
