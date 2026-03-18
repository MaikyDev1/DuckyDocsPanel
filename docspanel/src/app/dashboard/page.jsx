'use client'

import {EditorRenderer} from "@/app/duckyengine/Renderer";
import {DashboardIcon, DefaultUserIcon, TempLogo} from "@/app/icons";
import {useState} from "react";
import { Icon } from '@iconify-icon/react';
import {NewElementPopup} from "@/app/dashboard/EditorHelper";

const page_json = {
  meta: {
    title: "Power of Ducks",
    id: "power-of-ducks",
    path: "/power-of-ducks",
    icon: "mdi:duck",
    color: "#FF692A"
  },
  access: {
    mode: "public",
    type: "password",
  },
  elements: [
    {element: "title", size: "h2", text: "Welcome to the power of ducks", id: 1},
    {element: "divider", id: 2},
    {element: "p", id: 3, text: "In here you can add elements, change them, or preview them outside of the editor. Preview can be your url or you can use our urls for free!"},
  ]
}

export default function Page() {
  const [page, setPage] = useState(page_json);
  const [newElement, setNewElement] = useState(false);
  function addNewElement(element) {

  }
  return (
    <main className="h-screen w-screen grid grid-cols-7 bg-stone-800">
      {newElement ? <NewElementPopup closeFunction={() => setNewElement(false)}/> : null}
      <SideBar/>
      <section className="h-full bg-stone-800 col-span-6">
        <TopBar meta={page.meta}/>
        <div className="px-10 py-2 overflow-auto">
          {page.elements.map(e =>
            <EditorRenderer key={e.id} {...e}/>
          )}
          <div onClick={() => setNewElement(true)} className={`p-2 mt-5 cursor-pointer select-none flex items-center gap-2 bg-stone-800 text-stone-300 border-t border-stone-600 ring ring-stone-950 drop-shadow-2xl rounded-xl`}>
            <p className="font-medium text-md">+ New Element</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function SideBar({}) {
  return (
    <nav className="flex select-none p-2 rounded-r-2xl h-full flex-col col-span-1 bg-stone-900">
      <div className="flex justify-around items-center py-4 border-b border-b-stone-700">
        <div className="flex items-center justify-center gap-2">
          <TempLogo className="text-2xl"/>
          <p className="text-stone-300 font-mono text-lg">DuckyDocs</p>
        </div>
        <div className="p-2 rounded-full bg-stone-700">
          <DefaultUserIcon className="text-2xl"/>
        </div>
      </div>
      <div className="py-5 border-b gap-1 flex flex-col border-b-stone-700">
        <SidebarButton sel={true} name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
        <SidebarButton name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
        <SidebarButton name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
      </div>
      <div className="py-5 gap-1 flex flex-col">
        <SidebarButton name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
        <SidebarButton name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
        <SidebarButton name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
        <SidebarButton name="Dashboard" icon={<DashboardIcon className="text-xl"/>}/>
      </div>
    </nav>
  )
}

function SidebarButton({icon, name, sel}) {
  return (
    <div className={`p-2 cursor-pointer flex items-center gap-2 ${sel ? "bg-stone-800 text-stone-300 border-t border-stone-600 ring ring-stone-950 drop-shadow-2xl" : "text-stone-500"} rounded-xl`}>
      {icon}
      <p className="font-medium text-md">{name}</p>
    </div>
  )
}

function TopBar({meta}) {
  return (
    <nav className="flex flex-col w-full p-2">
      <div className="flex items-center gap-3 p-2">
        <Icon className="text-5xl" icon={meta.icon} style={{color: meta.color}}/>
        <p className="text-lg">{meta.title}</p>
        <p className="border-l border-l-stone-700 pl-2 text-stone-500 font-mono text-sm">Saving is not avaliable</p>
      </div>
    </nav>
  )
}

// export default function Home() {
//   const [content, setContent] = useState([
//     {id: 0, type: "p", text: "Hello guys!"},
//     {id: 1, type: "code", text: "public void main () {\n  int a = 't'; \n}"},
//     {id: 2, type: "expandable", content: [
//         {id: 3, type: "p", text: "Hello guys!"},
//         {id: 3, type: "p", text: "I am in a n expandable!"}
//       ]},
//   ]);
//
//   const handleKeys = (e) => {
//     const id = document.activeElement.id;
//     switch (e.key) {
//       case "Enter": {
//         e.preventDefault();
//         const newId = newElementAfter(id, {type: "p", text: ""});
//         document.getElementById(newId.toString()).focus();
//         break;
//       }
//       case "ArrowDown": {
//         e.preventDefault();
//         const index = getNextElement(id).id;
//         document.getElementById(index).focus();
//         break;
//       }
//       case "ArrowUp": {
//         e.preventDefault();
//         const index = getNextElement(id).id;
//         document.getElementById(index).focus();
//         break;
//       }
//     }
//   };
//
//   const updateText = (id, newText) => {
//     setContent(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, text: newText } : item
//       )
//     );
//   };
//
//   const getIndexById = (id) => {
//     return content.findIndex(item => item.id === id);
//   };
//
//   const newElementAfter = (afterId, element) => {
//     const newElement = {
//       id: Date.now(),
//       ...element
//     }
//     setContent(prev => {
//       const updated = [...prev];
//       updated.splice(getIndexById(afterId) + 1, 0, newElement);
//       return updated;
//     });
//     return newElement.id
//   }
//   const getNextElement = (id) => {
//     return content[content.findIndex(item => item.id === id) + 1];
//   }
//   return (
//     <div className="bg-stone-900 h-screen w-screen p-3">
//       <div className="p-2 bg-stone-600 flex gap-1">
//         <p>DuckyDocs </p>
//         <p>| Untilted</p>
//         <div onClick={() => alert(JSON.stringify(content))}>Show code</div>
//       </div>
//       <main className="p-2 flex flex-col">
//         <section className="flex flex-col ml-25">
//           {content.map(element =>
//             <div key={element.id}>
//               <EditorRenderer getNextElement={getNextElement} addElementAfter={newElementAfter} updateTextFunction={updateText} element={element.type} text={element.text} id={element.id}/>
//             </div>
//           )}
//         </section>
//         <div className="mt-5 rounded-xl p-2 bg-stone-500" >Add new element</div>
//       </main>
//     </div>
//   );
// }
