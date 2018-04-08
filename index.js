function getFirstSelector(selector) {
  var s = document.querySelector(selector)
  return s
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var elements = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = n + parseInt(elements[i].textContent)
  }
}

function deepestChild() {
  var elements = document.querySelector('div#grand-node')
}