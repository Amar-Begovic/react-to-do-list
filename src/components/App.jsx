import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

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
function deleteItem(id){
  setItem(prevItem =>{
    return prevItem.filter((item, index)=>{
      return index!==id
    });
  });
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
        {item.map((todoItem, index )=>(
            <ToDoItem
             key = {index}
             id = {index}
             text = {todoItem}
             onChecked = {deleteItem}
             />
        ))};
          
        </ul>
      </div>
    </div>
  );

}
export default App;
