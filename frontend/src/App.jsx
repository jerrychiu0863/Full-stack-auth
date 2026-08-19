import { useState } from "react";
import generateName from "sillyname";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [name, setName] = useState(generateName());

  const add = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setText("");
    setList([...list, text]);
  };
  // console.log(list);
  return (
    <>
      <p>{count}</p>
      <p>{text}</p>
      {name}
      <button
        onClick={() => {
          setName(generateName());
        }}
      >
        Change name
      </button>
      <button onClick={add}>Add</button>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
}

export default App;
