
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a syntax highlighting style
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 200) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setItems(prevItems => [
        ...prevItems,
        ...Array.from({ length: 20 }, (_, i) => `Item ${(prevItems.length + i) + 1}`)
      ]);
    }, 1500);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((item, index) => (
          <div key={index} style={{ margin: 10, padding: 10, border: '1px solid #ccc' }}>
            {item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

const code1 = `<li key={1} style={{color: false ? 'magenta' : 'darkgreen'}}>Cabbage</li>`;
const code2 = `const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }`;
function Example() {
  return (<>
    <h1 style={{fontWeight:'bold'}}>例子:利用React实现无限渲染的列表</h1>
    <p>首先一个有限列表的渲染方式，在传统的html中是这样的：</p>
    <SyntaxHighlighter language="html" style={tomorrow}>
        {code1}
    </SyntaxHighlighter>
    <li key={1} style={{color: false ? 'magenta' : 'darkgreen'}}>Cabbage</li>
    <p>这使得我们在渲染多个物体时非常困难!因为虽然我们只需要复制粘贴然后该对应属性，但是这仍然十分繁琐。</p>
    <p>正如我们之前所说，React支持我们去动态的根据JS对象来渲染HTML元素，这就可以让我们将问题简化为定义一个形式简明的JS对象，加定义一套React组件将对象渲染为HTML</p>
    <SyntaxHighlighter language="javascript" style={tomorrow}>
        {code2}
    </SyntaxHighlighter>
    <p>在上述代码中，我们首先定义了简化的JS对象 products 其中记载了每个对象本质不同的信息是啥，之后我们针对该对象定义了相应的map函数，其可以利用对象信息构造HTML信息</p>
    <p>在React中，HTML以JSX的形式存在，所以可以共存于JS代码中。从纯代码数据到JSX数据只需要使用{}大括号在其上作用即可转换！</p>
    <p style={{color: 'red'}}>但是正如本章主题所言，我们想要构造一个无限的JS列表，而后者原本是不可能使用只允许有限项存在静态的HTML操作实现的，同时</p>
    <p>但是在React中，我们可以自由的进行任意多的渲染，又因为我们可以实现JS代码和JSX的无缝转换，因此我们就可以利用滚轮的特性，在每次滑动滚轮的时候加载一部分，相当于区块技术，我们只加载要涉及到的区块信息，每次加载都延伸一定的列表长度信息。从而实现无限长度的列表</p>
    <p>下面是我们利用此进行的实践！我们只偷偷写了有限项，实际上可以让他无限的加载下去</p>
    <App></App>
  </>);
}

export default Example;