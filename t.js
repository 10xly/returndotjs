require('./index')

functions.hi = function() {
  _return("hi")
}

var hi =functions.hi

console.log(hi())
