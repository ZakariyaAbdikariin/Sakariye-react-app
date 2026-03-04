import { useState } from "react";

function Inputer() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type = "text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Inputer;
