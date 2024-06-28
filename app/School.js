// About.js
import React from 'react';
import "./school.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a syntax highlighting style

const user = {
  name: 'hysteria',
  imageUrl: 'https://v2.hysteria.network/assets/artworks/hc_name.png',
  imageLSize: 200,
  imageHSize: 100
};

const code1 = `function Profile() {
  return (
    <>
      <h1 style={{ backgroundColor:'red' }}>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageLSize,
          height: user.imageHSize
        }}
      />
    </>
  );
}
`;

function Profile() {
  return (
    <>
      <h1 style={{ backgroundColor:'red' }}>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageLSize,
          height: user.imageHSize
        }}
      />
    </>
  );
}

function School() {
  return (<>
    <p style={{fontWeight : 'bold'}}>CSS渲染</p>
    <p>在 React 中，你可以使用 className 指定 CSS 类。其工作方式与 HTML class 属性相同 , 然后在单独的 CSS 文件中为其编写 CSS 规则</p>
    <div class="qwq">
      比如这里,在css中利用.name进行选择即可
    </div>
    <p>JSX 允许您将标记放入 JavaScript。
      花括号允许您“退出”到 JavaScript，以便您可以从代码中嵌入一些变量并将其显示给用户。</p>
    <p>比如我们可以在纯文本段落中调用user.name : {user.name} ,就得到了一串字体不同的字符</p>
    <p>您还可以从 JSX 属性“转入 JavaScript”，但必须使用花括号而不是引号。
      例如，className="avatar" 将“avatar”字符串作为 CSS 类传递，
      但 <React.Fragment>{'src={user.imageUrl}'}</React.Fragment> 读取 JavaScript user.imageUrl 变量值，然后将该值作为 src 属性传递</p>
    <Profile></Profile>
    <p>也即依据如下代码，我们成功插入了这张图片</p>
    <SyntaxHighlighter language="javascript" style={tomorrow}>
        {code1}
    </SyntaxHighlighter>  
    <p style={{fontWeight: 'bold'}}>条件渲染</p>
    <p>在 React 中，没有用于编写条件的特殊语法。相反，你将使用与编写常规 JavaScript 代码相同的技术。你可以使用 if 语句有条件地包含 JSX,也可以使用条件运算符?Operator</p>
    <p style={{fontWeight: 'bold'}}>渲染列表</p>
    <p>我们可以完全依靠 JavaScript 功能（例如 for 循环和数组 map() 函数）来呈现组件列表。并且在组件内部，使用 map() 函数将产品数组转换为 <React.Fragment>{'<li>'}</React.Fragment> 项目数组，实现对list的渲染，这部分详情信息在Example文件里</p>
    <p style={{fontWeight: 'bold'}}>响应事件</p>
    <p>您可以通过在组件内部声明事件处理程序函数来响应事件</p>
    <button class="bt1" onClick={()=>alert("您就点击了我")}>比如尝试点击我！</button>
    <p style={{fontWeight: 'bold'}}>记录信息和更新屏幕</p>
    <p>你会希望你的组件“记住”一些信息并显示它。例如，也许你想计算按钮被点击的次数。为此，可以利用useState函数向组件添加状态。</p>
    <p>在本文档中的具体体现是，我们在主界面使用了useState变量控制点击上述四个切换界面的按钮的信息，在每次点击按钮后，我们会记录点击信息并进行相对应的渲染，从而实现切换界面的效果</p>
  </>);
}

export default School;