import React, { useState } from 'react'

export default function TextForm(props) {
    const UpperCase=()=>{
        // console.log("Uppercase was clicked"+text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const LowerCase=()=>{
        // console.log("Uppercase was clicked"+text)
        let newText=text.toLowerCase()
        setText(newText)
    }
    const Copy=()=>{
        var text = document.getElementById("MyBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const ClearText=()=>{
        let newText=""
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
        <div className="container" style={{color : props.Mode==='dark' ? 'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="MyBox" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={UpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={LowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={Copy}>Copy Text</button>
            </div>
        </div>
        <div className="container" style={{color: props.Mode==='light' ? 'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} Time to read(Minutes)</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text in the TextBox to preview'}</p>
        </div>
        
    </>
   
  )
}
