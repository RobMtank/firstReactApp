import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnchange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter your text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Upper Class</button>
    </div>

  );
  }