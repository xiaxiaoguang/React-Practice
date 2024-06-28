import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a syntax highlighting style


function Renderers(value){
    return (
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    );
}; 

export default Renderers;