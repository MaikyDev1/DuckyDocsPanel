'use client'

import Image from "next/image";
import {EditorRenderer, Renderer} from "@/app/duckyengine/Renderer";
import {useState} from "react";
import {DeleteIcon, EditIcon} from "@/app/icons";

export default function Home() {
  const [content, setContent] = useState([
    {id: 0, type: "p", text: "Hello guys!"},
    {id: 1, type: "code", text: "public void main () {\n  int a = 't'; \n}"}
  ]);
  return (
    <div className="bg-stone-900 h-screen w-screen p-3">
      <div className="p-2 bg-stone-600 flex gap-1">
        <p>DuckyDocs </p>
        <p>| Untilted</p>
      </div>
      <main className="p-2 flex">
        <section className="flex flex-col ml-25">
          {content.map(element =>
            <div key={element.id}>
              <EditorRenderer element={element.type} text={element.text} id={element.id}/>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
