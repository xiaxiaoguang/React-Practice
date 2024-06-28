import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a syntax highlighting style

// Define your Markdown content
const markdown = `
# Markdown Heading

**This is bold text.**

- List item 1
- List item 2

Here is the \\color{red}{\\text{main}} body.

$A+B=C$

Let's write a JavaScript a+b problem!
\`\`\`javascript

// This is a code block
let a = 1;
let b = 2;
function aplusb(a, b) {
  return a + b;
}
console.log(aplusb(a, b));

\`\`\`
`;

const formula = `// This is a code block
let a = 1;
let b = 2;
function aplusb(a, b) {
  return a + b;
}
console.log(aplusb(a, b));
`;
// Create the component

function Markdown() {
  return (
    <div>
      <p>
        这里是使用React-Markdown进行渲染的部分Markdown代码，我们的渲染结果表示，他并不能支持不同颜色，也不能支持 数学渲染和markdown内置函数的调用
      </p>
      <p>        
        只能支持传统的黑体字和无颜色的语言渲染
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown}
      </ReactMarkdown>
      <p>但是我们可以使用react-syntax-highlighter中的包调用SyntaxHighlighter进行解决</p>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {formula}
      </SyntaxHighlighter>      
      <p>这也是我们大部分前面章节中使用的惯用伎俩</p>
    </div>
  );
}

export default Markdown;