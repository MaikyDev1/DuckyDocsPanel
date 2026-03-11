const context = require.context("", false, /\.jsx$/)

const registry = {}

context.keys().forEach((key) => {
  const mod = context(key).default

  mod.element_name.forEach((name) => {
    registry[name] = {
      element: mod.element,
      editor_element: mod.in_editor
    }
  })
})

export default registry