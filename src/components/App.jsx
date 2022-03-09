import React, { useState } from "react";

function App(){
const [inputText, setInputText]=useState("");
const [item, setItem]=useState([]);

function hanldeChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
}
function addItem(){
    setItem(prevItem =>([...prevItem , inputText]));
        
    setInputText("");
}



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hanldeChange} type="text"  value={inputText}/>
        <button onClick={addItem}> 
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {item.map(i =>
           (<li>{i}</li>) 
        )};
          
        </ul>
      </div>
    </div>
  );

}
export default App;
