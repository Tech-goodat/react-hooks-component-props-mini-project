import React from 'react.js'
import blogData from "../data/blog";
import Header from'./Header.js'
import About from'./About.js'
import Article from './Article.js'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Article />
    </div>
  );
}

export default App;
