window.onload = function () {
  let list = document.querySelector("main"),
    i;
  for (i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[(Math.random() * i) | 0]);
  }
};
