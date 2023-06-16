import React, { useState } from 'react'
import Todolist from './Todolist';

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => { 
    setInput(event.target.value);
  };
  const list = () => { 
    setItems((olditems)=> {
      return [...olditems, input];
    })
    setInput('');
  };
  const deleteItem = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
            })
          })
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Item' value={input}
            onChange={itemEvent} />
          <button onClick={list}>+</button>
          <ol>
            { /*<li>{input}</li>*/}
            {
              items.map((itemval,index) => {
                return <Todolist key={index}
                  onSelect={deleteItem}
                  id={index} text={itemval} />
              })
            }
          </ol>
        </div> 
      </div>
    </>
  )
}
