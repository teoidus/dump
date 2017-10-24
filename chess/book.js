var book_entries = ['placeholder']
try {
  var book_url = 'https://teoidus.github.io/dump/chess/book.txt'
  var req = new XMLHttpRequest()
  req.addEventListener('load', function() { book_entries = this.responseText.split('\n').filter(e => e.trim() !== '') })
  req.open('GET', book_url, false) // false to force synchronous execution
  req.send()
} catch (e) {
  throw 'could not load opening book from `' + book_url + '`'
}

var book = {}
var book_ptr = book // current position in book
for (var s of book_entries) { // build opening book tree
  var moves = [] // convert each string in book_entries to array of moves
  while (s !== '') {
    moves.push(s.substring(0, 4))
    s = s.substring(4)
  }
  ptr = book
  for (var m of moves) { // add each move, accumulating game counts and sub-books along the way
    if (m in ptr)
      ptr[m].games += 1
    else
      ptr[m] = { games: 1, book: {} }
    ptr = ptr[m].book
  }
}

function pick_book_move() {
  var options = {} // maps game count to move
  for (var m in book_ptr)
    options[book_ptr[m].games] = m
  var sorted_counts = Object.keys(options).map(e => e|0).sort() // sort in ascending order
  var total_count = sorted_counts.reduce((x, y) => x + y)
  var distr = sorted_counts.map(e => e / total_count) // get marginal probabilities
  for (var i = distr.length - 1; i > 0; --i) // in descending order,
    distr[i - 1] += distr[i] // turn marginal probabilities into cumulative probabilities
  distr.shift() // ditch first result (always 1)
  distr.push(0) // add 0 to end
  var toss = Math.random()
  for (var i = 0; i < distr.length; ++i) // find the first match in distr
    if (toss > distr[i]) // for which toss > cumulative probability
      return options[sorted_counts[i]] // and return the corresponding move
}

function book_histogram(n) {
  var choices = {}
  for (var i = 0; i < n; ++i) {
    var choice = pick_book_move()
    if (choice in choices)
      choices[choice] += 1
    else
      choices[choice] = 1
  }
  for (var choice in choices) {
    var s = ''
    for (var i = 0; i < choices[choice]; ++i)
      s += '.'
    console.log(choice + ' ' + s)
  }
}