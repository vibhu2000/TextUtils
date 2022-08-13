//rfc
import React, { useState } from 'react'

export default function TextForm(props) {
    // const [text, setText] = useState("Enter the text here")         //state and hooks
    const [text, setText] = useState("")
    // text = "new text"   // wrong way to change the state
    // setText("new text")  // correct way to change the state

    const handleUpClick = () => {
        console.log("Uppercase was click");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to UpperCase","success")
    }
    
    const handleLoClick = () => {
        console.log("Lowercase was click");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to LowerCase","success")
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    
    const handleClearClick = (event) => {
        console.log('Clear Text');
        setText(event.target.value)
        props.showAlert("Text Cleared","success")
    }
    
    const handleCopy = (event) => {
        // console.log('Copy Text');
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success")
    }
    
    const handleExtraSpaces = (event) => {
        console.log('handleExtraSpaces');
        let newText = text.split(/[ ]+/)        //regex
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
        
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>CopyText</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
             <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>  {/* split(/\s+/)  --> /\s/ this is regular expression */}
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!!!!"}</p>
        </div>
        </>
    )
}

