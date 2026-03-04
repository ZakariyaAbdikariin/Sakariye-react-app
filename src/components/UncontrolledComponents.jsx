import { useRef, useState } from "react";

function UncontrolledComponents() {
  const inputRef = useRef();
  const [surname, setSurName] = useState("");

  const handleSubmit = (e) => {
    // alert("Entered Name: " + inputRef.current.value);
    setSurName(e.target.value);


  }
  return (
    <div>
        <p>{surname}</p>
       <input type="text" ref={inputRef} /> // Ref to read value
        <input type="text" onChange={handleSubmit}/>
      
      <button onClick={handleSubmit}>Show Name</button>


    </div>
      
  );
}
export default UncontrolledComponents;