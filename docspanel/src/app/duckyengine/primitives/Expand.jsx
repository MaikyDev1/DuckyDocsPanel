import {DeleteIcon, DropDownArrowIcon, EditIcon} from "@/app/icons";
import {EditableText} from "@/app/duckyengine/DuckyTextEditor";
import {useState} from "react";
import {EditorRenderer, Renderer} from "@/app/duckyengine/Renderer";
import {GrayButton} from "@/app/FlareUI/Basic/Buttons";
import {NewElementPopup} from "@/app/dashboard/EditorHelper";

function Helper({id, title, children}) {
  const [inView, setInView] = useState(false);
  return (
    <div key={id} className=" rounded-lg border my-1 px-12 border-stone-600 w-full p-3">
      <div onClick={() => setInView(!inView)} className="flex items-center">
        <DropDownArrowIcon className={`text-4xl ${!inView ? "-rotate-90" : "rotate-0"} absolute -translate-x-9 transition-transform`}/>
        <div className="text-lg">{title}</div>
      </div>
      <div className={`${!inView ? "hidden" : ""} transition-transform`}>
        {children}
      </div>
    </div>
  )
}

export function Expand({id, title, content}) {
  return (
    <Helper id={id} title={title}>
      {content.map(e => <Renderer key={e.id} {...e}/>)}
    </Helper>
  )
}

export function InEditor({id, title, content, addNewElement}) {
  const [newElement, setNewElement] = useState(false);
  return (
    <div>
      {newElement ? <NewElementPopup addElementFunction={addNewElement} parentID={id} closeFunction={() => setNewElement(false)}/> : null}
      <div className="flex gap-2 relative">
        <DeleteIcon className="absolute -translate-x-11"/>
        <EditIcon className="absolute -translate-x-6"/>
        <Helper id={id} title={title}>
          {content.map(e => <EditorRenderer key={e.id} {...e} addNewElement={addNewElement}/>)}
          <div className="mt-2">
            <GrayButton title="+ Add new element" onClick={() => setNewElement(true)}/>
          </div>
        </Helper>
      </div>
    </div>
  )
}

const paragraphModule = {
  element: Expand,
  element_name: ["expand"],
  default_config: {element: "expand", title: "", content: []},
  in_editor: InEditor
}

export default paragraphModule