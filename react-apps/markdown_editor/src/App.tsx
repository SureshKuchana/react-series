import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'


function App() {
  const [markdown, setMarkdown]= useState("# hello")


  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange}/>

      <ReactMarkdown className='preview' >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default App;
