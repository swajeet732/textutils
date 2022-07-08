import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    //console.log("upperclick was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick=()=>{
      //console.log("lowerclick was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick=()=>{
      //console.log("lowerclick was clicked" + text);
      let newText = '';
      setText(newText)
    }

  const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value)
  }


   const [text,setText] = useState('Enter text here2')  

   return  (
     <>
       <div className="container">
       <h1>Enter the text to analyze</h1>

      
         <div className="mb-3">
         
         <textarea className="form-control" value={text} onChange ={handleOnChange} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
         <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
       </div>
       <div className="container my-3">
         <h1>Your text summary</h1>
         <p>{text.split("").length} words and {text.length} characters</p>

         <p>{0.008 * text.split("").length} Minutes read</p>
         <h2>preview</h2>
         <p>{text}</p>
       </div>
       </>

  
    
      
    
  )
}
