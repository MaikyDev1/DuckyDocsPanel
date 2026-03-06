export function Break({id}) {
  return (
    <p key={id} className="">
      break
    </p>
  )
}

const paragraphModule = {
  element: Break,
  element_name: ["break", "b"]
}

export default paragraphModule