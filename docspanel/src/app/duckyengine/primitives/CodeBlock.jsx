import SyntaxHighlighter from "react-syntax-highlighter";

export function CodeBlock({id, text}) {
  const codeString = '(num) => num + 1\nmiaw';
  return (
    <div className="flex">
      <SyntaxHighlighter language="javascript" showLineNumbers className="rounded-lg">
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

const paragraphModule = {
  element: CodeBlock,
  element_name: ["code"]
}

export default paragraphModule