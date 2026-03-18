import {DeleteIcon, EditIcon} from "@/app/icons";
import {EditableText} from "@/app/duckyengine/DuckyTextEditor";

export function Divider({id}) {
  return (
    <p key={id} className="">
      break
    </p>
  )
}

export function InEditor({id}) {
  return (
    <div className="flex gap-2">
      <DeleteIcon className=""/>
      <EditIcon className=""/>
      <div className="w-full border-t border-t-stone-600 h-0 mt-2"/>
    </div>
  )
}

const paragraphModule = {
  element: Divider,
  in_editor: InEditor,
  element_name: ["divider"]
}

export default paragraphModule