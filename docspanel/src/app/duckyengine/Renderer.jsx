import registry from "./primitives/Registry"

export function Renderer(props) {
  const Component = registry[props.element].element

  if (!Component) return null

  return <Component key={props.id} {...props} />
}

export function EditorRenderer(props) {
  const Component = registry[props.element].editor_element

  if (!Component) return null

  return <Component key={props.id} {...props} />
}