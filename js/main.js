let button = document.querySelector(".button");
let box = document.querySelector(".checkbox")
let header = document.querySelector(".header")
let card = document.querySelectorAll(".box")
let p = document.querySelector(".para")
let pa = document.querySelector(".wh")

box.onclick = function() {
  button.classList.toggle("button-dark")
  document.body.classList.toggle("body-dark")
  header.classList.toggle("header-dark")
  card.forEach(function(ele) {
    ele.classList.toggle("card-dark")
  })
  p.style.color = "hsl(228, 34%, 66%)";
  pa.classList.toggle("dark-h2")
}

button.onmouseover = function() {
  if (document.body.classList.contains("body-dark")) {
    p.classList.add("text-dark")
  }
}

button.onmouseout = function() {
  p.classList.remove("text-dark")
}