# Return.js
> Returning, but better.

Instead of doing this..

```js
function add(a, b) {
  return a + b
}
```

...you can now do this!

```js
const { functions, _return } = require('returndotjs/safe')

functions.add = function(a, b) {
  _return(a + b)
}
const add = functions.add
```

Or this:

```js
require('returndotjs')

functions.add = function(a, b) {
  _return(a + b)
}
const add = functions.add
```

And then...
```js
console.log(add(1, 2))
```

which outputs `3`!

## Important Note

Using Return.js will work with the following examples:
```js
const { functions, _return } = require('returndotjs/safe')

functions.hi = function () {
  _return("hi")
}

// or

functions.hi = () => {
  _return("hi")
}

```

But it won't work like this:

```js
const { functions, _return } = require('returndotjs/safe')

const hi = functions.hi = () => {
  _return("hi")
}

console.log(hi()) // undefined

```

or in any other way than the given examples that work.
