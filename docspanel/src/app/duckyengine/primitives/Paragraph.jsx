import {DeleteIcon, EditIcon} from "@/app/icons";
import {EditableText} from "@/app/duckyengine/DuckyTextEditor";

export function Paragraph({id, text}) {
  return (
    <p key={id} className="">
      {text}
    </p>
  )
}

export function InEditor({id, text}) {
  return (
    <div className="flex gap-2 relative">
      <DeleteIcon className="absolute -translate-x-11"/>
      <EditIcon className="absolute -translate-x-6"/>
      <EditableText id={id} text={text}/>
    </div>
  )
}

const paragraphModule = {
  element: Paragraph,
  element_name: ["p"],
  default_config: {element: "p", text: "Click to edit!"},
  in_editor: InEditor
}

export default paragraphModule