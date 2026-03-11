import {DeleteIcon, EditIcon} from "@/app/icons";

export function Paragraph({id, text}) {
  return (
    <p key={id} className="">
      {text}
    </p>
  )
}

export function InEditor({id, text}) {
  return (
    <div className="flex gap-2">
      <DeleteIcon className=""/>
      <EditIcon className=""/>
      <p key={id} className="">
        {text}
      </p>
    </div>
  )
}

const paragraphModule = {
  element: Paragraph,
  element_name: ["p"],
  in_editor: InEditor
}

export default paragraphModule