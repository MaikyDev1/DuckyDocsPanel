import SyntaxHighlighter from "react-syntax-highlighter";
import {EditorRenderer} from "@/app/duckyengine/Renderer";
import {DeleteIcon, EditIcon} from "@/app/icons";

export function CodeBlock({id, text}) {
  const codeString = '(num) => num + 1\nmiaw';
  return (
    <div className="flex">
      <SyntaxHighlighter language="javascript" showLineNumbers className="rounded-lg">
        {text}
      </SyntaxHighlighter>
    </div>
  );
}

export function InEditor({id, text}) {
  return (
    <div className="flex gap-2">
      <DeleteIcon className=""/>
      <EditIcon className=""/>
      <CodeBlock id={id} text={text}/>
    </div>
  )
}

const paragraphModule = {
  element: CodeBlock,
  in_editor: InEditor,
  element_name: ["code"]
}

export default paragraphModule