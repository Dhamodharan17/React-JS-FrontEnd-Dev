import React,{useState} from 'react'


export default function App() {

  const [increment,setIncrement] = useState(50);
  const [toggle,setToggle] = useState(false);

  const incrementMe = () =>{
    setIncrement((prev)=>prev+1);
  }

  const toggleMe = () =>{
    setToggle((prev)=>!toggle)
  }


  return (
    <div>
      <p>useState</p>
      <p>increment value : {increment}</p>
      <button onClick={incrementMe}>Click to increment</button>
<button onClick={toggleMe}>toggle</button>
    </div>
  )


}
