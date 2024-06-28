// Home.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a syntax highlighting style

const code1 = `function MyButton() {
     return (
        <button>
            I'm a button
        </button>
    );
}`;

const code2 = `// Define a function component that receives destructured props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
`;

const code3 = `function App() {
    return <Greeting name="Alice" />;
  }`;

function Home() {
  return (<>
    <p style={{ fontWeight: 'bold' }}>React项目实践和实现</p>
    <p> 我们致力于实现对 React 框架的简单讲解和了解,并利用该网页作为实际的事例介绍React的特色</p>
    <p> React 应用由组件组成。组件是 UI（用户界面）的一部分，具有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。
        React 组件是返回标记的 JavaScript 函数</p>
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {code1}
      </SyntaxHighlighter>
    <p>React 组件名称必须始终以大写字母开头，而 HTML 标签必须小写。</p>

    <p style={{ fontWeight: 'bold' }}>JSX标记语法</p>
    <p>JSX 比 HTML 更严格。您必须关闭 <React.Fragment>{'<br/>'}</React.Fragment> 之类的标签。</p>
    <p>您的组件也不能返回多个 JSX 标签。您必须将它们包装到共享父级中，例如 
      <React.Fragment>{'<div></div>'}</React.Fragment> 或空的 <React.Fragment>{'<></>'}</React.Fragment> 包装器</p>

    <p>如何声明一个React组件以及使用它呢？</p>
    <p>最简单的方式是使用函数组件，函数组件是 React 中定义组件的更简单、更现代的方式。他的定义方式就如上述代码中的MyButton函数一样，返回一个JSX标记语法，然后这个函数就定义了JSX标记语法的具体行为</p>
    <p>我们可以通过在()中添加参数来进一步确定他的行为,例如</p>
    <SyntaxHighlighter language="javascript" style={tomorrow}>{code2}</SyntaxHighlighter>
    <p>而在调用他的时候我们填充的就是内部所在的参数</p>
    <SyntaxHighlighter language="javascript" style={tomorrow}>{code3}</SyntaxHighlighter>
    <p></p>
  </>);
}

export default Home;