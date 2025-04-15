import React, { useState } from "react";

export default function Componente() {
  const [text, setText] = useState("");
  const textOnChange = (event) => setText(event.target.value);
  return (
    <div>
      Componente
      <input type="text" value={text} onChange={textOnChange} />
      <p>{text}</p>
      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
}
