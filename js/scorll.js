let div1 = document.querySelector(".pre7u");
let div2 = document.querySelector(".pre7d");
let div3 = document.querySelector("#canvasOuter");
div1.addEventListener("scroll", function () {
  let scrollLeft = div1.scrollLeft;
  div2.scrollLeft = scrollLeft;
  div3.scrollLeft = scrollLeft;
});
div2.addEventListener("scroll", function () {
  let scrollLeft = div2.scrollLeft;
  div1.scrollLeft = scrollLeft;
  div3.scrollLeft = scrollLeft;
});
div3.addEventListener("scroll", function () {
  let scrollLeft = div3.scrollLeft;
  div2.scrollLeft = scrollLeft;
  div1.scrollLeft = scrollLeft;
});
