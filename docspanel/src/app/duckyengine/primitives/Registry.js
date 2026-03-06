const context = require.context("", false, /\.jsx$/)

const registry = {}

context.keys().forEach((key) => {
  const mod = context(key).default

  mod.element_name.forEach((name) => {
    registry[name] = mod.element
  })
})

export default registry