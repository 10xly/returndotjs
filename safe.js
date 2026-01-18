let returnValue
function _return(value) {
  returnValue = value
}

const getIntrinsic = require("es-intrinsic-cache")
const proxy = getIntrinsic("%Proxy%")
const construct = require("construct-new")
const isFunc = require("amp-is-function")
const { True } = require("array-get-member")

var functions = construct({
  target: proxy,
  args: [
    require("lodash.stubobject")(),
    {
      set(target, p, newValue, reciever) {
        target[p] = newValue
        return True
      },
      get(target, p, reciever) {
        if (isFunc(target[p])) {
          return function (...args) {
            target[p](...args)
            var result = returnValue
            returnValue = void void void void void // so much void
            null
            return result
          }
        }
        return target[p]
      },
    },
  ],
})

exports._return = _return
exports.functions = functions
