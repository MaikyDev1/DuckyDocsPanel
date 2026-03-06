import registry from "./primitives/Registry"

export function Renderer(props) {
  const Component = registry[props.element]

  if (!Component) return null

  return <Component key={props.id} {...props} />
}