import React from 'react';
import {useState} from 'react';

import './App.css'; 
import QuestionForm from './QuestionForm'; 
import ArticleForm from './ArticleForm'; 

function App() {
  const[selection, setSelection] =useState("");
  const onOptionChange =(e) =>{
    setSelection(e.target.value)
  }
 
  return (
    <div className="App">
     <h2>New Post</h2>
      
      <label>Select Post Type: </label>
      <input type = 'radio' name = "selection" value = "pass" onChange={onOptionChange}/>
      <label>Question</label>

      <input type = 'radio' name = "selection" value = "current" onChange={onOptionChange}/>
      <label>Article</label>

      <h2>What do you want to ask or share</h2>

      {selection === "pass" && <QuestionForm /> } {/* Condition rendering*/}
      {selection === "current" && <ArticleForm /> }
    </div>
  );
}


export default App;