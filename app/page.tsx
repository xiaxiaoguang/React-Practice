// App.js
'use client'; // This directive ensures the component is treated as a client component
import React, { useState } from 'react';
import Home from './Home';
import School from './School';
import Example from './Example';
import RootLayout from "./layout"
import Markdown from "./Markdown"
import "./local.css";


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'school') {
      return <School />;
    }else if(currentPage === 'example'){
      return <Example />;
    }else if(currentPage === 'markdown'){
      return <Markdown />;
    }
  };

  return (
    <RootLayout>
      <div>
          <h1>Java script语言设计 曹瀚中 2200012929</h1>
          <h1>本文档完全由React架构+TypeScript/JavaScript语言撰写</h1>
          <h1>说在前面：本文档本身就是React架构一个很好的实践运行，我们在撰写文档的同时也遇到并解决了很多React架构不得不解决的问题和特性，因此虽然文档内容较简单，可是为之进行的相关工作还是很丰富的！
            但不得不说我没想到这个接触起来还是难度很大的😭
          </h1>
        <nav>
            <button className="button" onClick={() => setCurrentPage('home')}>Pages1</button>
            <button className="button" onClick={() => setCurrentPage('school')}>Pages2</button>
            <button className="button" onClick={() => setCurrentPage('example')}>Example</button>
            <button className="button"  onClick={() => setCurrentPage('markdown')}>MarkD</button>
        </nav>
        {renderPage()}
      </div> 
    </RootLayout>
  );
}
