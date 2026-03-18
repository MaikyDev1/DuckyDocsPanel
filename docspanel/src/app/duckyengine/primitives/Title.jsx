import {DeleteIcon, EditIcon} from "@/app/icons";
import {EditableText} from "@/app/duckyengine/DuckyTextEditor";

function sizeToTailwindSize(size) {
  switch (size) {
    case "h1": return "text-5xl"
    case "h2": return "text-4xl"
    case "h3": return "text-3xl"
  }
}

export function Title({id, text, size}) {
  return (
    <h1 key={id} className={`${sizeToTailwindSize(size)}`}>
      {text}
    </h1>
  )
}

export function InEditor({id, text, size}) {
  return (
    <div className="flex gap-2">
      <DeleteIcon className=""/>
      <EditIcon className=""/>
      <div className={`${sizeToTailwindSize(size)} font-bold`}>
        <EditableText id={id} text={text}/>
      </div>
    </div>
  )
}

const paragraphModule = {
  element: Title,
  element_name: ["title"],
  in_editor: InEditor
}

export default paragraphModule