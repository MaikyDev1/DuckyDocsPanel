import {GrayButton, StoneButton} from "@/app/FlareUI/Basic/Buttons";

function BasePopup({children, closeFunction}) {
  return (
    <div onClick={closeFunction} className="bg-white/10 backdrop-blur-[2px] z-100 absolute top-0 left-0 flex justify-center items-center w-screen h-screen">
      <div className="p-2 flex items-center justify-between flex-col py-5 rounded-2xl shadow-2xl w-1/4 bg-stone-900 min-h-1/4" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export function NewElementPopup({addElementFunction, parentID, closeFunction}) {
  return (
    <BasePopup closeFunction={closeFunction}>
      <p>Add a new element</p>
      <div className="h-90 my-2 py-2 px-4 flex flex-col gap-2 bg-stone-800 w-2/3 rounded-2xl overflow-y-scroll ">
        {/* BASIC ELEMENTS */}
        <p className="text-sm border-b border-b-stone-600 text-center">Basic Elements</p>
        <StoneButton title="Title"/>
        <StoneButton title="Paragraph" onClick={() => addElementFunction(parentID, "p")}/>
        <div className="flex w-full gap-2">
          <StoneButton title="Divider" onClick={() => addElementFunction(parentID, "divider")}/>
          <StoneButton title="Brake" onClick={() => addElementFunction(parentID, "brake")}/>
        </div>
        {/* Advanced ELEMENTS */}
        <p className="text-sm border-b border-b-stone-600 text-center">Advanced Elements</p>
        <StoneButton title="Code" onClick={() => addElementFunction(parentID, "code")}/>
        <StoneButton title="Expandable"/>
        <StoneButton title="Table"/>
        <StoneButton title="Tabs"/>
        <StoneButton title="Math"/>
        {/* OTHER ELEMENTS */}
      </div>
      <div className="w-1/2 flex flex-col">
        <GrayButton title="Close" onClick={closeFunction}/>
      </div>
    </BasePopup>
  )
}

export function EditElementPopup({setClose}) {

}

export function DeleteElementPopup({setClose}) {

}