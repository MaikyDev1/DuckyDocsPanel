export function Paragraph({id, text}) {
  return (
    <p key={id} className="">
      {text}
    </p>
  )
}

const paragraphModule = {
  element: Paragraph,
  element_name: ["p"]
}

export default paragraphModule