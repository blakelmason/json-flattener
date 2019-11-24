const _ = require('lodash')

function flatten(report) {
  const flat = []
  ;(function recurse(item) {
    if (Array.isArray(item)) {
      for (child of item) {
        recurse(child)
      }
    } else {
      flat.push(
        _.pick(item, [
          'firstName',
          'lastName',
          'county',
          'city',
          'role',
          'sales'
        ])
      )
      if (item.children.length > 0) return recurse(item.children)
    }
  })(report)

  return flat
}

module.exports = flatten
