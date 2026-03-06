import Image from "next/image";
import {Renderer} from "@/app/duckyengine/Renderer";

export default function Home() {
  return (
    <div className="bg-stone-900 h-screen w-screen p-3">
      <main className="flex flex-col">
        <Renderer element="p" text="Hello" id="1"/>
        <Renderer element="code" text="Hello" id="2"/>
        <Renderer element="break" text="Hello" id="3"/>
      </main>
    </div>
  );
}
